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

const RETOS_PRESET = [
    'El "yo nunca, nunca"',
    'Pide al chat un consejo para superar el desamor',
    'Actúa una escena dramática con otra persona de la llamada',
    'Di el consejo mas tóxico que se te ocurra',
    'Confiesa tu locura más grande por el/la ex',
    'Mensaje provocador al aire',
    'Canción q te recuerde de tu ex',
    'Canta una canción de desamor',
    'Recrea un drama',
    'Pregunta incomoda sobre su vida amorosa',
    'Cuenta lo más tóxico que hayas hecho en una relación.',
    'Mensaje atrevido para el/la ex',
    'Pide al chat el consejo más tóxico',
    'Cuenta una experiencia dolida',
    'Cuenta la anécdota más intensa o vergonzosa que tengas con un ex',
    'DM atrevido',
    'Dime 3 cosas que hiciste x amor q te arrepientes',
    'Describe como seria tu cita catastrófica',
    'Baile huayno',
    'Comparte una experiencia romántica o atrevida que nunca hayas contado. Si no lo haces, ¡doble shot!',
    'Haz como si estuvieras hablando con tu crush en voz alta, exagerando todo. Si no lo haces, ¡castigo!',
    'Deja que el público o chat te hagan preguntas subidas de tono. Si no respondes, ¡shot obligatorio!',
    'Deja que el grupo decida un reto para ti, sin poder negarte.',
    'Di el mayor secreto que guardas sobre tus relaciones pasadas o presentes. Si no lo haces, ¡triple trago!',
    'Pretende que estás en una cita con alguien de la llamada e improvisen una conversación coqueta.',
    'Cada participante debe decir algo más atrevido que el anterior. El que se quede sin ideas, ¡bebe!',
    'Deja que alguien elija un mensaje que deberás enviar a una persona al azar de tu lista.',
    'Di quién en la llamada te parece más atractivo. Si no te atreves, ¡doble castigo!',
    'Alguien te pregunta algo comprometedor y solo puedes responder "sí" o "no". Si no lo haces, ¡bebe!',
    'Sube algo con doble sentido en tus historias o redes sociales. Si no lo haces, ¡bebida doble!',
    'Envía un mensaje atrevido a un contacto de tus redes. Si no lo haces, ¡castigo triple!',
    'Di en voz alta quién es tu crush (puede ser famoso o alguien conocido). Si no lo haces, ¡shot!',
    'Busca en redes a tu crush o ex y describe algo gracioso o extraño de su perfil.',
    'Escribe algo absurdo o picante en tu historia de Instagram.',
    'Adopta una pose sexy frente a la cámara por 10 segundos. Si te da pena, ¡shot!',
    'Imitar el movimiento más sensual que hayas visto en una película o serie. Si no logras impresionar, ¡bebe!',
    'Ponte algo que normalmente nunca usarías en público.',
    'Haz una actuación breve como si estuvieras en una escena romántica exagerada con alguien de la llamada. Si no lo haces, ¡shot!',
    'Di una frase al azar (puede ser algo absurdo) usando tu tono más seductor. Si no lo logras, ¡bebida!',
    'Simula cómo actuarías si estuvieras en una cita terrible. Si no haces reír, ¡castigo!',
    'Haz tu mejor intento de imitar una escena icónica de película romántica con alguien del grupo.',
    'Hazle a cada participante una pregunta subidita de tono que deben contestar o beber.',
    'Cuenta algo atrevido que hayas pensado recientemente. Si no lo haces, toma un shot.',
    'Envía un mensaje sugerente a alguien que te guste. Si no te atreves, ¡doble shot!',
    '¿Qué es lo más loco o atrevido que has hecho en una cita? Si no contestas, ¡bebe tres tragos!',
    'Di algo que nunca hayas contado a nadie, relacionado con tus relaciones. Si no lo haces, ¡shot obligatorio!',
    'Deja que alguien del grupo te haga una pregunta personal y contesta con total honestidad. Si no lo haces, ¡castigo doble!',
    'Escribele a tu crush'
];

const VERDAD_PRESET = [
    '¿Te han propuesto salir o algo más en un stream? ¿Aceptaste?',
    'Si tuvieras que hacer un stream en pareja, ¿a quién elegirías y por qué?',
    '¿Te ha pasado que alguien en el chat te pone nervioso/a porque te atrae?',
    '¿Has sentido celos de un streamer porque le tiran más la onda que a ti?',
    '¿Qué es lo más atrevido que harías en stream si estuvieras seguro/a de no ser baneado/a?',
    '¿Quién de los presentes crees que sería tu mejor pareja en la vida real?',
    '¿Alguna vez has coqueteado con un espectador o seguidor?',
    '¿Qué harías si otro streamer te propusiera algo más que una colaboración profesional?',
    '¿Cuál es el DM más atrevido que has recibido de un fan?',
    '¿Has pensado en hacer contenido "para adultos" o algo más sensual fuera de Twitch?',
    'Alguna vez has hecho un stream sin ropa debajo de lo que llevabas puesto?',
    '¿Has fantaseado con alguien de tu comunidad o con otro streamer?',
    'Si te dieran total libertad en Twitch, ¿harías contenido explícito?',
    '¿Te han ofrecido dinero o regalos para hacer algo inapropiado en privado?',
    '¿Qué harías si un/a seguidor/a atractivo/a te invitara a salir después de un stream?',
    '¿Alguna vez has flirteado descaradamente en vivo?',
    '¿Has hecho algo "subido de tono" pensando que la cámara estaba apagada y no lo estaba?',
    '¿Qué es lo más atrevido que alguien te ha pedido hacer en un stream?',
    'Si un streamer que te atrae físicamente te propusiera un "after stream" íntimo, ¿aceptarías?',
    '¿Cuál es tu fetiche secreto que crees que alguien podría adivinar viendo tus directos?',
    'Alguna vez has tenido pensamientos sexuales sobre un colaborador o colaboradora?',
    '¿Te excita la idea de que te miren mientras haces stream?',
    '¿Cuál es el lugar más atrevido donde has tenido una experiencia íntima?',
    '¿Has hecho sexting con alguien que conociste gracias a tu canal?',
    '¿Qué streamer elegirías para protagonizar contenido para adultos contigo?',
    '¿Alguna vez alguien te ha mandado fotos explícitas sin que las pidieras? ¿Qué hiciste?',
    '¿Has usado tu popularidad como streamer para ligar o tener encuentros casuales?',
    'Si pudieras hacer un stream "para adultos" con un tema específico, ¿cuál sería?',
    '¿Cuál es la experiencia más atrevida que has vivido relacionada con tu comunidad?',
    '¿Te animarías a hacer un directo temático con contenido sugerente si no hubiera restricciones?'
];

// ==========================================================================
// ESTADO GLOBAL
// ==========================================================================
let currentTemplate = localStorage.getItem("roulette_active_template") || "retos";
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
            const isOldNumberList = saved.every((item, idx) => {
                const text = typeof item === "string" ? item : item.text;
                return text === String(idx + 1);
            });
            if (!isOldNumberList) {
                return saved.map(e => (typeof e === "string" ? { text: e, struck: false } : e));
            }
        }
    } catch (e) {}
    const preset = currentTemplate === "verdad" ? VERDAD_PRESET : RETOS_PRESET;
    return preset.map(text => ({ text, struck: false }));
}

function loadTemplate(type) {
    if (isSpinning) return;
    currentTemplate = type;
    localStorage.setItem("roulette_active_template", type);

    const preset = type === "verdad" ? VERDAD_PRESET : RETOS_PRESET;
    entries = preset.map(text => ({ text, struck: false }));

    updateTemplateUI();
    renderEditor();
}

function updateTemplateUI() {
    const selector = document.getElementById("template-selector");
    const tplRetosBtn = document.getElementById("tpl-retos-btn");
    const tplVerdadBtn = document.getElementById("tpl-verdad-btn");
    const panelTitleText = document.getElementById("panel-title-text");

    if (selector) {
        selector.classList.toggle("is-verdad", currentTemplate === "verdad");
    }

    if (panelTitleText) {
        panelTitleText.classList.remove("title-pop");
        void panelTitleText.offsetWidth; // Reflow
        panelTitleText.classList.add("title-pop");
        panelTitleText.innerText = currentTemplate === "verdad" ? "Verdades" : "Retos";
    }

    if (tplRetosBtn && tplVerdadBtn) {
        if (currentTemplate === "verdad") {
            tplVerdadBtn.classList.add("active");
            tplRetosBtn.classList.remove("active");
        } else {
            tplRetosBtn.classList.add("active");
            tplVerdadBtn.classList.remove("active");
        }
    }
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
// AUDIO & LISTA DE MÚSICA EN ORDEN SECUENCIAL
// ==========================================================================
const TRACK_FILES = [
    "musicfondobaibe.m4a",
    "musicfondocallaita.m4a",
    "musicfondochambea.m4a",
    "musicfondomirame.m4a",
    "musicfondonuevayol.m4a",
    "musicfondopensaba.m4a",
    "musicfondoperreosola.m4a",
    "musicfondosafaera.m4a",
    "musicfondotiti.m4a"
];
const TRACKS = TRACK_FILES.map(src => {
    const audio = new Audio(src);
    audio.preload = "auto";
    return audio;
});
let currentTrackIndex = 0;
let currentTrack = null;

function pickNextTrack() {
    if (TRACKS.length === 0) return null;

    const track = TRACKS[currentTrackIndex];

    // Avanzar a la siguiente canción en orden y volver a la primera al llegar al final
    currentTrackIndex = (currentTrackIndex + 1) % TRACKS.length;

    return track;
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

// ==========================================================================
// SISTEMA DE HISTORIAL (DESHACER / REHACER: CTRL+Z / CTRL+Y)
// ==========================================================================
let historyStack = [];
let historyIndex = -1;
let isApplyingHistory = false;
let inputDebounceTimer = null;

function pushHistoryState() {
    if (isApplyingHistory) return;

    const currentStateStr = JSON.stringify(entries);

    // Evitar registrar estados duplicados consecutivos
    if (historyIndex >= 0 && historyIndex < historyStack.length) {
        if (JSON.stringify(historyStack[historyIndex]) === currentStateStr) {
            return;
        }
    }

    // Si estábamos en medio del historial y se realiza un nuevo cambio, podar el futuro
    if (historyIndex < historyStack.length - 1) {
        historyStack = historyStack.slice(0, historyIndex + 1);
    }

    historyStack.push(JSON.parse(currentStateStr));
    if (historyStack.length > 60) {
        historyStack.shift();
    }
    historyIndex = historyStack.length - 1;
}

function undo() {
    if (isSpinning || historyIndex <= 0) return;
    historyIndex--;
    isApplyingHistory = true;
    entries = JSON.parse(JSON.stringify(historyStack[historyIndex]));
    renderEditor(false);
    isApplyingHistory = false;
}

function redo() {
    if (isSpinning || historyIndex >= historyStack.length - 1) return;
    historyIndex++;
    isApplyingHistory = true;
    entries = JSON.parse(JSON.stringify(historyStack[historyIndex]));
    renderEditor(false);
    isApplyingHistory = false;
}

// Atajos globales de teclado para Deshacer (Ctrl+Z) y Rehacer (Ctrl+Y / Ctrl+Shift+Z)
document.addEventListener("keydown", (e) => {
    if (isSpinning) return;

    if (e.ctrlKey || e.metaKey) {
        if (e.key.toLowerCase() === "z" && !e.shiftKey) {
            e.preventDefault();
            undo();
        } else if (e.key.toLowerCase() === "y" || (e.key.toLowerCase() === "z" && e.shiftKey)) {
            e.preventDefault();
            redo();
        }
    }
});

// Renderiza todo el contenido visual en el editor
function renderEditor(saveHistory = true) {
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

    if (saveHistory) {
        pushHistoryState();
    }
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
            const rawText = node.textContent || "";
            const isStruck = (node.nodeType === 1 && (
                node.classList.contains("struck-line") ||
                node.tagName === "S" ||
                node.tagName === "DEL" ||
                node.style.textDecoration?.includes("line-through")
            ));

            const subLines = rawText.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
            subLines.forEach(text => {
                lines.push({ text, struck: isStruck });
            });
        });
    }

    entries = lines;
    updateUIState();
    drawWheel();
}

optionsEditor.addEventListener("input", () => {
    if (!isSpinning) {
        readEditor();
        clearTimeout(inputDebounceTimer);
        inputDebounceTimer = setTimeout(() => {
            pushHistoryState();
        }, 300);
    }
});

// Pegado directo de listas: reemplaza lo seleccionado o la lista completa si se seleccionó todo
optionsEditor.addEventListener("paste", (e) => {
    e.preventDefault();
    const pasteData = (e.clipboardData || window.clipboardData)?.getData("text") || "";
    if (!pasteData) return;

    const selection = window.getSelection();
    const selectedText = selection ? selection.toString().replace(/\r?\n/g, "").trim() : "";
    const currentText = optionsEditor.innerText.replace(/\r?\n/g, "").trim();

    const isAllOrMostSelected = selectedText.length > 0 && (
        selectedText === currentText || 
        selectedText.length >= currentText.length * 0.9
    );

    const newLines = pasteData
        .split(/\r?\n/)
        .map(l => l.trim())
        .filter(l => l.length > 0);

    if (isAllOrMostSelected || entries.length === 0 || !optionsEditor.innerText.trim()) {
        // Reemplazo total con las nuevas opciones pegadas
        entries = newLines.map(text => ({ text, struck: false }));
        renderEditor();
    } else if (selection && selection.rangeCount > 0) {
        // Reemplazar la selección actual o insertar en el cursor
        const range = selection.getRangeAt(0);
        range.deleteContents();

        const textNode = document.createTextNode(pasteData);
        range.insertNode(textNode);

        range.setStartAfter(textNode);
        range.setEndAfter(textNode);
        selection.removeAllRanges();
        selection.addRange(range);

        readEditor();
        pushHistoryState();
    } else {
        // Fallback: reemplazo completo
        entries = newLines.map(text => ({ text, struck: false }));
        renderEditor();
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

    // Detener cualquier reproducción previa y seleccionar canción aleatoria sin repetir la anterior
    stopAllTracks();
    currentTrack = pickNextTrack();

    // Obtener la duración exacta de la pista de audio seleccionada
    let duration = 10000;
    if (currentTrack && currentTrack.duration && !isNaN(currentTrack.duration) && isFinite(currentTrack.duration) && currentTrack.duration > 0) {
        duration = currentTrack.duration * 1000;
    }

    // Reproducir música aleatoria sincronizada para este giro
    if (currentTrack) {
        currentTrack.volume = getEffectiveVolume();
        currentTrack.currentTime = 0;
        currentTrack.play().catch(e => console.warn("Audio play prevented:", e));
    }

    const numItems = activeItems.length;
    const arc = (2 * Math.PI) / numItems;

    // Calcular vueltas proporcionales a la duración del audio para mantener una velocidad óptima
    const durSec = duration / 1000;
    const spinsBase = Math.max(6, Math.round(durSec * 1.3));
    const extraRotations = (spinsBase + Math.random() * 3) * (2 * Math.PI);
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
    updateTemplateUI();
    setupHiDPI();
    renderEditor();
});
