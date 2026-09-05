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
    'El "yo nunca, nunca" (haz 3 rondas con el grupo)',
    'Pide al chat un consejo para superar el desamor',
    'Actúa una escena dramática de telenovela con alguien de la llamada',
    'Di el consejo más tóxico y divertido que se te ocurra',
    'Confiesa la mayor locura que hiciste por amor',
    'Dedica un mensaje provocador al aire sin decir nombres',
    'Canta a todo pulmón el coro de una canción de despecho',
    'Describe cómo sería tu cita absolutamente catastrófica',
    'Baila 20 segundos con estilo exagerado y divertido',
    'Comparte una anécdota vergonzosa que nunca antes hayas contado',
    'Haz como si hablaras con tu crush por teléfono exagerando todo',
    'Deja que el chat te haga 2 preguntas incómodas y respóndelas sin filtro',
    'Deja que el grupo elija un castigo o reto para ti sin poder negarte',
    'Muestra la última foto guardada en tu galería del celular',
    'Improvisa una conversación de primera cita coqueta con alguien de la llamada',
    'Ronda rápida: cada persona dice algo atrevido; el que dude 3 segundos, bebe o castigo',
    'Envía un emoji de fuego o corazón a la 3ra persona en tus chats recientes',
    'Di en voz alta quién de la llamada te parece más atractivo/a',
    'Pregunta comprometedora del grupo: solo puedes contestar "SÍ" o "NO"',
    'Publica una encuesta absurda o picante en tus historias de Instagram',
    'Adopta una pose de modelo frente a la cámara durante 10 segundos',
    'Imita el movimiento de baile más sensual que recuerdes',
    'Ponte una prenda al revés o un accesorio ridículo por el resto de la ronda',
    'Lee en voz alta con tono seductor una noticia o receta aburrida',
    'Haz una llamada de 10 segundos a un amigo y dile que te vas a casar mañana',
    'Intenta hacer reír al grupo en 30 segundos sin hablar, solo gestos',
    'Muestra tu historial de búsqueda reciente de YouTube o TikTok',
    'Dile un piropo original y exagerado a alguien del grupo',
    'Haz 10 sentadillas o flexiones en vivo',
    'Imita a un streamer o personaje famoso hasta que adivinen quién es',
    'Habla con acento extranjero durante las próximas 2 rondas',
    'Muestra el meme más random o bizarro que tengas en el celular',
    'Cuenta el sueño más extraño que hayas tenido recientemente',
    'Tómate una foto haciendo una cara graciosa y compártela',
    'Di 3 cualidades positivas y 1 crítica constructiva a alguien de la llamada',
    'Envía un mensaje de voz cantando a un contacto al azar',
    'Bebe un trago o shot sin usar las manos',
    'Escribe un mensaje en rima dedicado al chat',
    'Muestra el objeto más raro o curioso que tengas en tu habitación',
    'Haz una declaración de amor épica y cómica a un objeto inanimado'
];

const VERDAD_PRESET = [
    '¿Te han propuesto salir o tener algo en privado a través de un stream?',
    'Si tuvieras que hacer un stream 24 horas en pareja, ¿a quién elegirías y por qué?',
    '¿Alguna vez alguien del chat o comunidad te ha puesto realmente nervioso/a por atracción?',
    '¿Has sentido celos de otro streamer o creador por su éxito o carisma?',
    '¿Qué es lo más atrevido que harías en vivo si supieras que no te van a banear?',
    '¿Quién de los presentes en la llamada crees que sería tu mejor pareja en la vida real?',
    '¿Alguna vez has coqueteado con un espectador por mensaje privado?',
    '¿Cuál es el mensaje directo (DM) más atrevido o descarado que has recibido?',
    '¿Has pensado seriamente en crear contenido para adultos?',
    '¿Alguna vez has hecho stream sin pantalones o con ropa inapropiada fuera de cuadro?',
    '¿Has tenido un crush secreto con alguien de tu comunidad o un colega streamer?',
    '¿Te han ofrecido dinero o regalos costosos a cambio de favores privados?',
    '¿Qué harías si un seguidor muy atractivo te invita a salir en privado?',
    '¿Alguna vez has dejado el micrófono o cámara prendidos por error en un momento comprometedor?',
    '¿Qué es lo más vergonzoso que te ha pasado en una primera cita?',
    '¿Has stalkeado el perfil de tu ex desde una cuenta secundaria o falsa?',
    '¿Cuál es tu mayor fantasía romántica que nunca le has contado a nadie?',
    '¿Alguna vez te has arrepentido inmediatamente después de besar a alguien?',
    '¿Has mentido en vivo para quedar bien o evitar polémica con la audiencia?',
    '¿Cuál es la mentira más grande que le has dicho a tus padres sobre tus salidas?',
    '¿Quién fue tu primer amor platónico famoso y sigues sintiendo algo por él/ella?',
    '¿Qué cualidad física es lo primero que miras en una persona que te gusta?',
    '¿Has tenido una experiencia paranormal o inexplicable que te haya dado terror?',
    '¿Cuál es el rumor más falso o divertido que han inventado sobre ti?',
    '¿Te has quedado dormido/a en una cita o llamada importante?',
    '¿Cuál ha sido tu peor borrachera y qué fue lo más vergonzoso que hiciste?',
    '¿Alguna vez has fingido interés en los gustos de alguien solo para agradarle?',
    '¿Qué secreto tuyo destruiría tu reputación si saliera a la luz?',
    '¿Has vuelto con un ex sabiendo que era una pésima idea?',
    '¿Cuál es el hábito más raro o curioso que tienes cuando estás a solas?'
];

// ==========================================================================
// ESTADO GLOBAL
// ==========================================================================
let currentTemplate = localStorage.getItem("roulette_active_template") || "retos";
let entries = loadSavedEntries(currentTemplate);
let currentAngle = 0;
let isSpinning = false;
let soundEnabled = JSON.parse(localStorage.getItem("roulette_sound") ?? "true");
let lastWinningItem = null;

// Registro de elementos ya seleccionados para evitar repeticiones antes de completar el ciclo
let playedHistory = {
    retos: [],
    verdad: []
};

// Cargar imagen central de la ruleta (Cara de Bad Bunny)
const centerFaceImg = new Image();
centerFaceImg.src = "carabadbunny.png";
centerFaceImg.onload = () => {
    drawWheel();
};

function getStorageKey(template) {
    return `roulette_entries_${template}`;
}

function loadSavedEntries(template = currentTemplate) {
    const key = getStorageKey(template);
    try {
        const savedRaw = localStorage.getItem(key);
        if (savedRaw) {
            const saved = JSON.parse(savedRaw);
            if (Array.isArray(saved) && saved.length > 0) {
                const isOldNumberList = saved.every((item, idx) => {
                    const text = typeof item === "string" ? item : item.text;
                    return text === String(idx + 1);
                });
                if (!isOldNumberList) {
                    return saved.map(e => (typeof e === "string" ? { text: e, struck: false } : { text: e.text, struck: Boolean(e.struck) }));
                }
            }
        }
    } catch (e) {
        console.warn("Error loading entries from localStorage:", e);
    }

    // Si no existía para este template específico, cargar su preset inicial limpio
    const preset = template === "verdad" ? VERDAD_PRESET : RETOS_PRESET;
    const initial = preset.map(text => ({ text, struck: false }));
    try {
        localStorage.setItem(key, JSON.stringify(initial));
    } catch (e) {}
    return initial;
}

function saveCurrentEntries() {
    const key = getStorageKey(currentTemplate);
    try {
        localStorage.setItem(key, JSON.stringify(entries));
    } catch (e) {
        console.warn("Error saving entries to localStorage:", e);
    }
}

function loadTemplate(type) {
    if (isSpinning) return;
    if (currentTemplate === type) return;
    
    // 1. Guardar estado actual del template que se está dejando
    saveCurrentEntries();
    
    // 2. Cambiar al nuevo template
    currentTemplate = type;
    localStorage.setItem("roulette_active_template", type);

    // 3. Cargar las entradas guardadas del nuevo template con sus tachados intactos
    entries = loadSavedEntries(type);

    // 4. Actualizar interfaz
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

// Obtener solo las opciones activas (no tachadas y con texto válido)
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
    currentTrackIndex = (currentTrackIndex + 1) % TRACKS.length;
    return track;
}

// Factor de ganancia maestro (50% max) para normalizar el audio
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

soundBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
        currentVolume = lastNonZeroVolume || 0.75;
    }
    localStorage.setItem("roulette_sound", JSON.stringify(soundEnabled));
    localStorage.setItem("roulette_volume", currentVolume.toString());
    updateSoundUI();
});

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
// GESTIÓN DEL EDITOR & SINCRONIZACIÓN CON LOCALSTORAGE
// ==========================================================================
function updateUIState() {
    const active = getActiveItems();
    const total = entries.filter(e => e.text.trim().length > 0).length;
    const struckCount = entries.filter(e => e.struck && e.text.trim().length > 0).length;

    if (struckCount > 0) {
        itemsCountBadge.innerText = `${active.length} activas (${struckCount} tachadas)`;
        if (restoreBtn) restoreBtn.style.display = "inline-flex";
    } else {
        itemsCountBadge.innerText = `${active.length} ${active.length === 1 ? 'opción' : 'opciones'}`;
        if (restoreBtn) restoreBtn.style.display = "none";
    }

    spinBtn.disabled = active.length < 2 || isSpinning;
    saveCurrentEntries();
}

// ==========================================================================
// SISTEMA DE HISTORIAL (DESHACER / REHACER: CTRL+Z / CTRL+Y)
// ==========================================================================
let historyStacks = { retos: [], verdad: [] };
let historyIndices = { retos: -1, verdad: -1 };
let isApplyingHistory = false;
let inputDebounceTimer = null;

function pushHistoryState() {
    if (isApplyingHistory) return;

    const tpl = currentTemplate;
    if (!historyStacks[tpl]) historyStacks[tpl] = [];
    
    let stack = historyStacks[tpl];
    let idx = historyIndices[tpl] ?? -1;

    const currentStateStr = JSON.stringify(entries);

    if (idx >= 0 && idx < stack.length) {
        if (JSON.stringify(stack[idx]) === currentStateStr) {
            return;
        }
    }

    if (idx < stack.length - 1) {
        stack = stack.slice(0, idx + 1);
    }

    stack.push(JSON.parse(currentStateStr));
    if (stack.length > 60) {
        stack.shift();
    }
    historyStacks[tpl] = stack;
    historyIndices[tpl] = stack.length - 1;
}

function undo() {
    const tpl = currentTemplate;
    const stack = historyStacks[tpl] || [];
    let idx = historyIndices[tpl] ?? -1;

    if (isSpinning || idx <= 0) return;
    idx--;
    historyIndices[tpl] = idx;
    isApplyingHistory = true;
    entries = JSON.parse(JSON.stringify(stack[idx]));
    renderEditor(false);
    isApplyingHistory = false;
}

function redo() {
    const tpl = currentTemplate;
    const stack = historyStacks[tpl] || [];
    let idx = historyIndices[tpl] ?? -1;

    if (isSpinning || idx >= stack.length - 1) return;
    idx++;
    historyIndices[tpl] = idx;
    isApplyingHistory = true;
    entries = JSON.parse(JSON.stringify(stack[idx]));
    renderEditor(false);
    isApplyingHistory = false;
}

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
    entries.forEach((entry) => {
        const div = document.createElement("div");
        div.textContent = entry.text;
        if (entry.struck) {
            div.className = "struck-line";
            div.title = "Opción tachada (doble clic para reactivar)";
        }
        optionsEditor.appendChild(div);
    });

    updateUIState();
    drawWheel();

    if (saveHistory) {
        pushHistoryState();
    }
}

// Lee el editor preservando el estado tachado de las líneas existentes
function readEditor() {
    const rawLines = [];
    const childNodes = Array.from(optionsEditor.childNodes);

    if (childNodes.length === 0) {
        const raw = optionsEditor.innerText;
        if (raw.trim()) {
            raw.split(/\r?\n/).forEach(l => {
                if (l.trim()) rawLines.push({ text: l.trim(), isExplicitStruck: false });
            });
        }
    } else {
        childNodes.forEach(node => {
            const rawText = node.textContent || "";
            const isStruck = (node.nodeType === 1 && (
                node.classList.contains("struck-line") ||
                node.tagName === "S" ||
                node.tagName === "DEL" ||
                Boolean(node.style.textDecoration && node.style.textDecoration.includes("line-through"))
            ));

            const subLines = rawText.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
            subLines.forEach(text => {
                rawLines.push({ text, isExplicitStruck: isStruck });
            });
        });
    }

    // Mantener los estados de tachado de las líneas previas para no perderlos al editar
    const prevStruckCounts = new Map();
    entries.forEach(e => {
        if (e.struck) {
            const key = e.text.trim();
            prevStruckCounts.set(key, (prevStruckCounts.get(key) || 0) + 1);
        }
    });

    const newEntries = [];
    rawLines.forEach(item => {
        const key = item.text.trim();
        const availableStruck = prevStruckCounts.get(key) || 0;
        
        let shouldBeStruck = item.isExplicitStruck;
        if (!shouldBeStruck && availableStruck > 0) {
            shouldBeStruck = true;
            prevStruckCounts.set(key, availableStruck - 1);
        }

        newEntries.push({ text: item.text, struck: shouldBeStruck });
    });

    entries = newEntries;
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

// Pegado directo de listas
optionsEditor.addEventListener("paste", (e) => {
    e.preventDefault();
    const pasteData = (e.clipboardData || window.clipboardData)?.getData("text") || "";
    if (!pasteData) return;

    const newLines = pasteData
        .split(/\r?\n/)
        .map(l => l.trim())
        .filter(l => l.length > 0);

    const selection = window.getSelection();
    const selectedText = selection ? selection.toString().replace(/\r?\n/g, "").trim() : "";
    const currentText = optionsEditor.innerText.replace(/\r?\n/g, "").trim();

    const isAllSelected = selectedText.length > 0 && (
        selectedText === currentText || 
        selectedText.length >= currentText.length * 0.9
    );

    if (isAllSelected || entries.length === 0 || !optionsEditor.innerText.trim()) {
        // Reemplazo completo
        entries = newLines.map(text => ({ text, struck: false }));
        renderEditor();
    } else {
        // Añadir o insertar en cursor
        document.execCommand("insertText", false, pasteData);
        readEditor();
        pushHistoryState();
    }
});

// Doble clic en una línea tachada para reactivarla intencionalmente (evita desmarcar por error al hacer clic)
optionsEditor.addEventListener("dblclick", (e) => {
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
    // Reiniciar también el historial de repetición
    playedHistory[currentTemplate] = [];
    renderEditor();
}

function clearAllItems() {
    if (isSpinning) return;
    entries = [];
    playedHistory[currentTemplate] = [];
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
        ctx.fillText("Todas las opciones tachadas o vacías", radius, radius);
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

        const baseColor = PALETTE[index % PALETTE.length];
        ctx.fillStyle = baseColor;
        ctx.fill();

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
        if (numItems > 24) fontSize = 10;
        else if (numItems > 16) fontSize = 12;
        else if (numItems > 10) fontSize = 13.5;

        ctx.font = `800 ${fontSize}px 'Outfit', sans-serif`;

        let displayText = item;
        if (displayText.length > 22) {
            displayText = displayText.substring(0, 20) + "...";
        }

        ctx.fillText(displayText, wheelRadius - 22, 0);
        ctx.restore();

        ctx.restore();
    });

    // 2. Anillo Exterior Blanco con Remaches
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

    // 3. Centro: Imagen pura de Bad Bunny
    ctx.save();
    if (centerFaceImg.complete && centerFaceImg.naturalWidth > 0) {
        const targetSize = 125;
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
// ANIMACIÓN DE GIRO SIN REPETICIÓN & FÍSICA SUAVE
// ==========================================================================
function spin() {
    const activeItems = getActiveItems();
    if (isSpinning || activeItems.length < 2) return;

    getAudioContext();
    isSpinning = true;
    spinBtn.disabled = true;
    document.body.classList.add("is-spinning-mode");

    // Detener audio previo y reproducir siguiente pista musical
    stopAllTracks();
    currentTrack = pickNextTrack();

    let duration = 10000;
    if (currentTrack && currentTrack.duration && !isNaN(currentTrack.duration) && isFinite(currentTrack.duration) && currentTrack.duration > 0) {
        duration = currentTrack.duration * 1000;
    }

    if (currentTrack) {
        currentTrack.volume = getEffectiveVolume();
        currentTrack.currentTime = 0;
        currentTrack.play().catch(e => console.warn("Audio play prevented:", e));
    }

    const numItems = activeItems.length;
    const arc = (2 * Math.PI) / numItems;

    // --- ALGORITMO ANTI-REPETICIÓN ---
    // Buscar opciones activas que aún no hayan salido en este ciclo
    const historyList = playedHistory[currentTemplate] || [];
    let candidates = activeItems.filter(item => !historyList.includes(item));
    
    // Si ya salieron todas las opciones activas, reiniciar el ciclo
    if (candidates.length === 0) {
        playedHistory[currentTemplate] = [];
        candidates = [...activeItems];
    }

    // Elegir aleatoriamente entre las candidatas que no han salido
    const targetItem = candidates[Math.floor(Math.random() * candidates.length)];
    const targetIndex = activeItems.indexOf(targetItem);
    
    // Registrar en el historial de este ciclo
    if (!playedHistory[currentTemplate]) playedHistory[currentTemplate] = [];
    playedHistory[currentTemplate].push(targetItem);

    // Calcular ángulo exacto para que el sector objetivo quede alineado bajo el puntero superior (3*PI/2)
    const pointerAngle = (3 * Math.PI) / 2;
    // Añadir un pequeño margen aleatorio dentro del sector (25% a 75%) para realismo natural
    const sectorOffset = 0.25 + Math.random() * 0.5;
    const targetAngleAtPointer = pointerAngle - (targetIndex + sectorOffset) * arc;

    // Normalizar ángulos en rango [0, 2*PI)
    const TWO_PI = 2 * Math.PI;
    const targetAngleMod = ((targetAngleAtPointer % TWO_PI) + TWO_PI) % TWO_PI;
    const currentAngleMod = ((currentAngle % TWO_PI) + TWO_PI) % TWO_PI;

    let deltaAngle = targetAngleMod - currentAngleMod;
    if (deltaAngle <= 0) {
        deltaAngle += TWO_PI;
    }

    // Giros completos proporcionales a la duración del audio
    const durSec = duration / 1000;
    const spinsBase = Math.max(6, Math.round(durSec * 1.3));
    const totalRotation = deltaAngle + spinsBase * TWO_PI;

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
// CÁLCULO DE GANADOR Y MODAL CON 3 ACCIONES
// ==========================================================================
function handleWinner() {
    const activeItems = getActiveItems();
    if (activeItems.length === 0) return;

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

// 2. TACHAR OPCIÓN (Permanece en la lista pero queda 100% excluida de la ruleta)
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

