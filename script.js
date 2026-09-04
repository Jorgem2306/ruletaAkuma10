// ==========================================================================
// PALETA DE COLORES TEMA PRE-BIRTHDAY STREAM (SUNSET, OCÉANO & ARENA)
// ==========================================================================
const PALETTE = [
    "#e11d48", // Tropical Sunset Pink / Red
    "#0284c7", // Ocean Cyan / Sky Blue
    "#f59e0b", // Golden Sunset Amber
    "#00509d", // Deep Stream Royal Blue
    "#10b981", // Palm Emerald Green
    "#f43f5e", // Hibiscus Rose Pink
    "#ea580c", // Tropical Warm Orange
    "#0d9488", // Caribbean Sea Teal
    "#d97706", // Beach Sand Gold
    "#4338ca"  // Twilight Indigo
];

const DEFAULT_ITEMS = [];

// ==========================================================================
// ESTADO GLOBAL
// ==========================================================================
let entries = loadSavedEntries();
let currentAngle = 0;
let isSpinning = false;
let soundEnabled = JSON.parse(localStorage.getItem("roulette_sound") ?? "true");
let lastWinningItem = null;

// Cargar imagen central de la ruleta (Cara de Bad Bunny)
const centerFaceImg = new Image();
centerFaceImg.src = "carabadbunny.png";
centerFaceImg.onload = () => {
    drawWheel();
};

function loadSavedEntries() {
    try {
        const saved = JSON.parse(localStorage.getItem("roulette_entries"));
        if (Array.isArray(saved) && saved.length > 0) {
            // Si lo guardado era solo la lista inicial de números de prueba 1..12, limpiarla
            const isOldNumberList = saved.every((item, idx) => {
                const text = typeof item === "string" ? item : item.text;
                return text === String(idx + 1);
            });
            if (!isOldNumberList) {
                return saved.map(e => (typeof e === "string" ? { text: e, struck: false } : e));
            }
        }
    } catch (e) {}
    return DEFAULT_ITEMS;
}

// Obtener solo las opciones activas (no tachadas)
function getActiveItems() {
    return entries.filter(e => !e.struck && e.text.trim().length > 0).map(e => e.text.trim());
}

// Elementos DOM
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spin-btn");
const optionsEditor = document.getElementById("options-editor");
const itemsCountBadge = document.getElementById("items-count-badge");
const restoreBtn = document.getElementById("restore-btn");
const soundBtn = document.getElementById("sound-btn");
const soundIconOn = document.getElementById("sound-icon-on");
const soundIconOff = document.getElementById("sound-icon-off");
const volumeSlider = document.getElementById("volume-slider");
const volumeVal = document.getElementById("volume-val");

// Modal DOM
const winnerModal = document.getElementById("winner-modal");
const winnerTitle = document.getElementById("winner-title");

// Confetti Canvas
const confettiCanvas = document.getElementById("confetti-canvas");
const confettiCtx = confettiCanvas.getContext("2d");
let confettiParticles = [];
let confettiAnimationId = null;

// ==========================================================================
// AUDIO & LISTA DE MÚSICA ALEATORIA (musicfondobaibe.m4a, musicfondotiti.m4a)
// ==========================================================================
const TRACK_FILES = ["musicfondobaibe.m4a", "musicfondotiti.m4a"];
const TRACKS = TRACK_FILES.map(src => {
    const audio = new Audio(src);
    audio.preload = "auto";
    return audio;
});
let currentTrack = null;
let lastTrackIndex = -1;

function pickNextTrack() {
    if (TRACKS.length === 0) return null;
    if (TRACKS.length === 1) return TRACKS[0];

    // Selecciona una pista distinta a la que sonó en el giro anterior
    let nextIndex;
    do {
        nextIndex = Math.floor(Math.random() * TRACKS.length);
    } while (nextIndex === lastTrackIndex);

    lastTrackIndex = nextIndex;
    return TRACKS[nextIndex];
}

// Factor de ganancia maestro (50% max) para normalizar el audio y evitar que sature a volumen alto
const MASTER_GAIN = 0.50; 

let currentVolume = parseFloat(localStorage.getItem("roulette_volume") ?? "0.75");
if (isNaN(currentVolume) || currentVolume < 0) currentVolume = 0.75;
let lastNonZeroVolume = currentVolume > 0 ? currentVolume : 0.75;

function getEffectiveVolume() {
    if (!soundEnabled || currentVolume <= 0) return 0;
    return Math.min(1, Math.max(0, currentVolume * MASTER_GAIN));
}

function updateTracksVolume() {
    const effVol = getEffectiveVolume();
    TRACKS.forEach(t => {
        t.volume = effVol;
    });
}

function stopAllTracks() {
    TRACKS.forEach(t => {
        t.pause();
        t.currentTime = 0;
    });
}

updateTracksVolume();

let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

function playWinSound() {
    if (!soundEnabled || currentVolume <= 0) return;
    try {
        const actx = getAudioContext();
        const notes = [523.25, 659.25, 783.99, 1046.50]; // Acorde C Mayor natural

        notes.forEach((freq, index) => {
            const osc = actx.createOscillator();
            const gain = actx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, actx.currentTime + index * 0.1);

            const peakGain = 0.08 * currentVolume;
            gain.gain.setValueAtTime(0, actx.currentTime + index * 0.1);
            gain.gain.linearRampToValueAtTime(peakGain, actx.currentTime + index * 0.1 + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + index * 0.1 + 0.7);

            osc.connect(gain);
            gain.connect(actx.destination);

            osc.start(actx.currentTime + index * 0.1);
            osc.stop(actx.currentTime + index * 0.1 + 0.75);
        });
    } catch (e) {
        console.warn("Audio error:", e);
    }
}

// Actualizar Interfaz de Sonido y Slider
function updateSoundUI() {
    updateTracksVolume();

    if (soundEnabled && currentVolume > 0) {
        soundIconOn.classList.remove("hidden");
        soundIconOff.classList.add("hidden");
        if (volumeSlider) {
            volumeSlider.value = Math.round(currentVolume * 100);
        }
        if (volumeVal) {
            volumeVal.innerText = `${Math.round(currentVolume * 100)}%`;
        }
    } else {
        soundIconOn.classList.add("hidden");
        soundIconOff.classList.remove("hidden");
        if (volumeSlider) {
            volumeSlider.value = 0;
        }
        if (volumeVal) {
            volumeVal.innerText = "0%";
        }
    }
}

// Botón de silenciar / activar (sin reiniciar posición de la música)
soundBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
        // Al reactivar el sonido, restaurar el nivel anterior
        currentVolume = lastNonZeroVolume || 0.75;
    }
    localStorage.setItem("roulette_sound", JSON.stringify(soundEnabled));
    localStorage.setItem("roulette_volume", currentVolume.toString());
    updateSoundUI();
});

// Control deslizante de volumen (ajusta el volumen en tiempo real sin reiniciar)
if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value, 10);
        currentVolume = val / 100;
        
        if (val > 0) {
            lastNonZeroVolume = currentVolume;
            soundEnabled = true;
        } else {
            soundEnabled = false;
        }

        localStorage.setItem("roulette_volume", currentVolume.toString());
        localStorage.setItem("roulette_sound", JSON.stringify(soundEnabled));
        updateSoundUI();
    });
}

// ==========================================================================
// GESTIÓN DEL EDITOR CONTENTEDITABLE & SINCRONIZACIÓN
// ==========================================================================
function updateUIState() {
    const active = getActiveItems();
    const total = entries.filter(e => e.text.trim().length > 0).length;
    const struckCount = entries.filter(e => e.struck).length;

    if (struckCount > 0) {
        itemsCountBadge.innerText = `${active.length} activas (${total} total)`;
        if (restoreBtn) restoreBtn.style.display = "inline-flex";
    } else {
        itemsCountBadge.innerText = `${active.length} ${active.length === 1 ? 'opción' : 'opciones'}`;
        if (restoreBtn) restoreBtn.style.display = "none";
    }

    spinBtn.disabled = active.length < 2 || isSpinning;
    localStorage.setItem("roulette_entries", JSON.stringify(entries));
}

// Renderiza todo el contenido visual en el editor
function renderEditor() {
    optionsEditor.innerHTML = "";
    entries.forEach((entry, index) => {
        const div = document.createElement("div");
        div.textContent = entry.text;
        if (entry.struck) {
            div.className = "struck-line";
            div.title = "Opción tachada (clic para reactivar)";
        }
        optionsEditor.appendChild(div);
    });

    updateUIState();
    drawWheel();
}

// Lee el editor cuando el usuario escribe directamente
function readEditor() {
    const lines = [];
    const childNodes = Array.from(optionsEditor.childNodes);

    if (childNodes.length === 0) {
        const raw = optionsEditor.innerText;
        if (raw.trim()) {
            raw.split(/\r?\n/).forEach(l => {
                if (l.trim()) lines.push({ text: l.trim(), struck: false });
            });
        }
    } else {
        childNodes.forEach(node => {
            const text = (node.textContent || "").trim();
            if (text.length > 0) {
                const isStruck = (node.nodeType === 1 && (
                    node.classList.contains("struck-line") ||
                    node.tagName === "S" ||
                    node.tagName === "DEL" ||
                    node.style.textDecoration?.includes("line-through")
                ));
                lines.push({ text, struck: isStruck });
            }
        });
    }

    entries = lines;
    updateUIState();
    drawWheel();
}

optionsEditor.addEventListener("input", () => {
    if (!isSpinning) {
        readEditor();
    }
});

// Pegado directo de listas: divide por líneas limpias
optionsEditor.addEventListener("paste", (e) => {
    e.preventDefault();
    const pasteData = (e.clipboardData || window.clipboardData)?.getData("text") || "";
    if (pasteData) {
        const newLines = pasteData
            .split(/\r?\n/)
            .map(l => l.trim())
            .filter(l => l.length > 0);

        if (newLines.length > 0) {
            const newEntries = newLines.map(text => ({ text, struck: false }));
            entries.push(...newEntries);
            renderEditor();
        }
    }
});

// Clic en una línea tachada para reactivarla
optionsEditor.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList && target.classList.contains("struck-line")) {
        const text = target.textContent.trim();
        const found = entries.find(entry => entry.text.trim() === text && entry.struck);
        if (found) {
            found.struck = false;
            renderEditor();
        }
    }
});

// ==========================================================================
// ACCIONES: MEZCLAR, ORDENAR, RESTAURAR, LIMPIAR
// ==========================================================================
function shuffleItems() {
    if (isSpinning || entries.length < 2) return;
    for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entries[i], entries[j]] = [entries[j], entries[i]];
    }
    renderEditor();
}

function sortItems() {
    if (isSpinning || entries.length < 2) return;
    entries.sort((a, b) => a.text.localeCompare(b.text, undefined, { numeric: true, sensitivity: 'base' }));
    renderEditor();
}

function restoreStruckItems() {
    if (isSpinning) return;
    entries.forEach(e => e.struck = false);
    renderEditor();
}

function clearAllItems() {
    if (isSpinning) return;
    entries = [];
    renderEditor();
    optionsEditor.focus();
}

// ==========================================================================
// RENDERIZADO HIGH-DPI DE LA RULETA EN CANVAS
// ==========================================================================
const BASE_WHEEL_SIZE = 440;

function setupHiDPI() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = BASE_WHEEL_SIZE * dpr;
    canvas.height = BASE_WHEEL_SIZE * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function drawWheel() {
    const size = BASE_WHEEL_SIZE;
    const radius = size / 2;
    const activeItems = getActiveItems();
    const numItems = activeItems.length;

    ctx.clearRect(0, 0, size, size);

    if (numItems === 0) {
        ctx.beginPath();
        ctx.arc(radius, radius, radius - 15, 0, 2 * Math.PI);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.strokeStyle = "#fed7aa";
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.fillStyle = "#00509d";
        ctx.font = "800 16px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Escribe opciones para girar", radius, radius);
        return;
    }

    const arc = (2 * Math.PI) / numItems;
    const wheelRadius = radius - 12;

    // 1. Dibujar Sectores
    activeItems.forEach((item, index) => {
        const angle = currentAngle + index * arc;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, wheelRadius, angle, angle + arc);
        ctx.closePath();

        // Color del sector limpio y vibrante (sin sombras oscuras en el borde)
        const baseColor = PALETTE[index % PALETTE.length];
        ctx.fillStyle = baseColor;
        ctx.fill();

        // Borde divisor blanco limpio
        ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Texto
        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(angle + arc / 2);
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
        ctx.shadowBlur = 3;

        let fontSize = 15;
        if (numItems > 20) fontSize = 11;
        else if (numItems > 12) fontSize = 13;
        else if (numItems > 8) fontSize = 14;

        ctx.font = `800 ${fontSize}px 'Outfit', sans-serif`;

        let displayText = item;
        if (displayText.length > 20) {
            displayText = displayText.substring(0, 18) + "...";
        }

        ctx.fillText(displayText, wheelRadius - 22, 0);
        ctx.restore();

        ctx.restore();
    });

    // 2. Anillo Exterior Blanco Puro con Remaches
    ctx.save();
    ctx.beginPath();
    ctx.arc(radius, radius, wheelRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 4;
    ctx.stroke();

    const pinCount = Math.max(numItems * 2, 18);
    for (let i = 0; i < pinCount; i++) {
        const pinAngle = currentAngle + (i * (2 * Math.PI / pinCount));
        const pinX = radius + (wheelRadius - 2) * Math.cos(pinAngle);
        const pinY = radius + (wheelRadius - 2) * Math.sin(pinAngle);

        ctx.beginPath();
        ctx.arc(pinX, pinY, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
    }
    ctx.restore();

    // 3. Centro: Imagen pura de Bad Bunny (carabadbunny) sin círculos ni bordes amarillos
    ctx.save();
    if (centerFaceImg.complete && centerFaceImg.naturalWidth > 0) {
        const targetSize = 125; // Tamaño ampliado para destacar aún más
        const aspect = centerFaceImg.naturalWidth / centerFaceImg.naturalHeight;
        let drawW = targetSize;
        let drawH = targetSize;
        if (aspect >= 1) {
            drawH = targetSize / aspect;
        } else {
            drawW = targetSize * aspect;
        }
        ctx.drawImage(
            centerFaceImg,
            radius - drawW / 2,
            radius - drawH / 2,
            drawW,
            drawH
        );
    }
    ctx.restore();
}

// ==========================================================================
// ANIMACIÓN DE GIRO Y FÍSICA
// ==========================================================================
function spin() {
    const activeItems = getActiveItems();
    if (isSpinning || activeItems.length < 2) return;

    getAudioContext();
    isSpinning = true;
    spinBtn.disabled = true;
    document.body.classList.add("is-spinning-mode");
    // Duración fija del giro de 10 segundos
    const duration = 10000; // 10000 ms = 10 segundos

    // Detener cualquier reproducción previa y seleccionar canción aleatoria sin repetir la anterior
    stopAllTracks();
    currentTrack = pickNextTrack();

    // Reproducir música aleatoria sincronizada para este giro
    if (currentTrack) {
        currentTrack.volume = getEffectiveVolume();
        currentTrack.currentTime = 0;
        currentTrack.play().catch(e => console.warn("Audio play prevented:", e));
    }

    const numItems = activeItems.length;
    const arc = (2 * Math.PI) / numItems;

    // Giros adecuados para una duración de 10 segundos (12 a 16 vueltas completas)
    const spinsBase = 12;
    const extraRotations = (spinsBase + Math.random() * 4) * (2 * Math.PI);
    const randomStop = Math.random() * (2 * Math.PI);
    const totalRotation = extraRotations + randomStop;

    const startTime = performance.now();
    const initialAngle = currentAngle;

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOut = 1 - Math.pow(1 - progress, 4.5);
        currentAngle = initialAngle + totalRotation * easeOut;

        drawWheel();

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            // Detener música de fondo y restaurar vista al terminar el giro
            stopAllTracks();
            document.body.classList.remove("is-spinning-mode");
            isSpinning = false;
            spinBtn.disabled = false;
            optionsEditor.setAttribute("contenteditable", "true");
            handleWinner();
        }
    }

    requestAnimationFrame(animate);
}

// ==========================================================================
// CÁLCULO DE GANADOR Y MODAL CON 3 OPCIONES
// ==========================================================================
function handleWinner() {
    const activeItems = getActiveItems();
    const arc = (2 * Math.PI) / activeItems.length;
    const pointerAngle = (3 * Math.PI) / 2;
    const normalizedAngle = (pointerAngle - (currentAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    const winningIndex = Math.floor(normalizedAngle / arc) % activeItems.length;

    lastWinningItem = activeItems[winningIndex];
    winnerTitle.innerText = lastWinningItem;

    playWinSound();
    startConfetti();
    winnerModal.classList.remove("hidden");
}

function closeWinnerModal() {
    winnerModal.classList.add("hidden");
    stopConfetti();
}

// 1. ELIMINAR OPCIÓN COMPLETAMENTE
function removeWinnerAndClose() {
    if (lastWinningItem) {
        const index = entries.findIndex(e => e.text.trim() === lastWinningItem && !e.struck);
        if (index > -1) {
            entries.splice(index, 1);
            renderEditor();
        }
    }
    closeWinnerModal();
}

// 2. TACHAR OPCIÓN (Se queda en la lista pero se elimina de la ruleta)
function strikeWinnerAndClose() {
    if (lastWinningItem) {
        const found = entries.find(e => e.text.trim() === lastWinningItem && !e.struck);
        if (found) {
            found.struck = true;
            renderEditor();
        }
    }
    closeWinnerModal();
}

winnerModal.addEventListener("click", (e) => {
    if (e.target === winnerModal) {
        closeWinnerModal();
    }
});

// ==========================================================================
// CONFETI TEMA PRE-BIRTHDAY
// ==========================================================================
const CONFETTI_PALETTE = ["#e11d48", "#0284c7", "#f59e0b", "#10b981", "#ffffff", "#f43f5e", "#ffb703", "#00509d"];

function resizeConfettiCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", () => {
    resizeConfettiCanvas();
    setupHiDPI();
    drawWheel();
});

function createConfettiParticle() {
    return {
        x: Math.random() * confettiCanvas.width,
        y: -20 - Math.random() * 50,
        size: 6 + Math.random() * 8,
        color: CONFETTI_PALETTE[Math.floor(Math.random() * CONFETTI_PALETTE.length)],
        speedX: -2 + Math.random() * 4,
        speedY: 3 + Math.random() * 5,
        rotation: Math.random() * 360,
        rotationSpeed: -4 + Math.random() * 8,
        opacity: 1
    };
}

function startConfetti() {
    resizeConfettiCanvas();
    confettiParticles = Array.from({ length: 85 }, createConfettiParticle);

    function animateConfetti() {
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

        confettiParticles.forEach((p, i) => {
            p.y += p.speedY;
            p.x += Math.sin(p.y * 0.05) * 1.5 + p.speedX;
            p.rotation += p.rotationSpeed;

            confettiCtx.save();
            confettiCtx.translate(p.x, p.y);
            confettiCtx.rotate((p.rotation * Math.PI) / 180);
            confettiCtx.fillStyle = p.color;
            confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            confettiCtx.restore();

            if (p.y > confettiCanvas.height) {
                confettiParticles[i] = createConfettiParticle();
            }
        });

        confettiAnimationId = requestAnimationFrame(animateConfetti);
    }

    if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
    animateConfetti();
}

function stopConfetti() {
    if (confettiAnimationId) {
        cancelAnimationFrame(confettiAnimationId);
        confettiAnimationId = null;
    }
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
window.addEventListener("DOMContentLoaded", () => {
    updateSoundUI();
    setupHiDPI();
    renderEditor();
});
