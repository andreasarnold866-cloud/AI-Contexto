const TRANSLATIONS = {
    'de-DE': {
        nav_tool: 'Analyse-Tool', nav_how: 'Funktionsweise', btn_dark: 'Dark Mode', btn_light: 'Light Mode',
        hero_title: 'Texte intelligent verstehen und bearbeiten',
        hero_sub: 'Contexto filtert Kernpunkte, korrigiert Grammatik, übersetzt Sprachen, schreibt Texte professionell um und analysiert Dokumente.',
        hero_cta: 'Jetzt testen', tool_title: 'Die Analyse- & Übersetzungsplattform',
        tool_sub: 'Füge einen Text ein, lade eine Datei hoch oder wähle dein gewünschtes KI-Modul',
        upload_main: 'Klicke hier oder ziehe eine .txt-Datei hinein',
        trans_label: 'Ziel-Sprache für Übersetzung:',
        modules_label: 'Analyse- & KI-Module:', mod_summary: '📄 Zusammenfassung', mod_explain: '💡 Einfach Erklären',
        mod_pro: '💼 Profi-Stil umschreiben', mod_points: '📌 In Stichpunkte wandeln', mod_grammar: '✏️ Grammatik-Check',
        mod_translate: '🌐 Übersetzer', mod_stats: '📊 Text-Metriken', btn_run: 'Analyse ausführen',
        btn_clear: 'Zurücksetzen', ki_warning: 'KI kann Fehler machen. Überprüfe wichtige Resultate sorgfältig.',
        res_title: 'Ergebnis', btn_copy: 'Kopieren', loading_text: 'KI analysiert Daten...',
        pipe_label: 'Sichere Architektur', pipe_title: 'Pipeline der Datenverarbeitung',
        pipe_sub: 'Der Weg von der rohen Zeichenkette zur verschlüsselten Serverless Function',
        step1_title: 'Frontend Input', step1_desc: 'Der Benutzer fügt den Text ein oder lädt eine Datei. JavaScript liest den Wert im DOM aus.',
        step2_title: 'Netlify Function', step2_desc: 'Die Daten wandern ans Backend. Der API-Key ist auf dem Server verborgen und für Nutzer unsichtbar.',
        step3_title: 'Inferenz', step3_desc: 'Das Sprachmodell verarbeitet den Text über OpenRouter und generiert die Antwort.',
        step4_title: 'DOM Injection', step4_desc: 'Das Ergebnis wandert zurück ans Frontend und wird über JavaScript flüssig eingeblendet.',
        char_unit: ' Zeichen', word_unit: 'Wörter', sentence_unit: 'Sätze', time_unit: 'ca. {sec} Sek.',
        grammar_ok: '🎉 Keine Fehler gefunden! Grammatik und Rechtschreibung sind einwandfrei.',
        grammar_hint: 'Folgende Korrekturhinweise wurden gefunden:', conn_err: 'Fehler bei der Server-Verbindung.'
    },
    'en-US': {
        nav_tool: 'Analysis Tool', nav_how: 'How it works', btn_dark: 'Dark Mode', btn_light: 'Light Mode',
        hero_title: 'Understand text intelligently and edit it',
        hero_sub: 'Contexto extracts key insights, corrects grammar, translates languages, rewrites text professionally, and analyzes documents.',
        hero_cta: 'Test Now', tool_title: 'The Analysis & Translation Platform',
        tool_sub: 'Paste text, upload a file, or select your preferred AI module',
        upload_main: 'Click here or drag a .txt file inside', trans_label: 'Target language for translation:',
        modules_label: 'Analysis & AI Modules:', mod_summary: '📄 Summary', mod_explain: '💡 Simple Explanation',
        mod_pro: '💼 Professional Style', mod_points: '📌 Convert to Bullet Points', mod_grammar: '✏️ Grammar Check',
        mod_translate: '🌐 Translator', mod_stats: '📊 Text Metrics', btn_run: 'Execute Analysis',
        btn_clear: 'Reset', ki_warning: 'AI can make mistakes. Verify important results carefully.',
        res_title: 'Result', btn_copy: 'Copy', loading_text: 'AI is analyzing data...',
        pipe_label: 'Secure Architecture', pipe_title: 'Data Processing Pipeline',
        pipe_sub: 'The path from raw string to encrypted Serverless Function',
        step1_title: 'Frontend Input', step1_desc: 'The user inserts text or uploads a file. JavaScript extracts the value from the DOM.',
        step2_title: 'Netlify Function', step2_desc: 'Data is sent to the backend. The API key is securely hidden on the server.',
        step3_title: 'Inference', step3_desc: 'The language model processes the text via OpenRouter and generates the response.',
        step4_title: 'DOM Injection', step4_desc: 'The result is sent back to the frontend and smoothly rendered into the document.',
        char_unit: ' characters', word_unit: 'Words', sentence_unit: 'Sentences', time_unit: 'approx. {sec} sec.',
        grammar_ok: '🎉 No errors found! Grammar and spelling are impeccable.',
        grammar_hint: 'The following correction notes were found:', conn_err: 'Error connecting to the server.'
    },
    'fr-FR': {
        nav_tool: 'Outil d\'analyse', nav_how: 'Fonctionnement', btn_dark: 'Mode Sombre', btn_light: 'Mode Clair',
        hero_title: 'Comprendre le texte de manière intelligente',
        hero_sub: 'Contexto filtre les points clés, corrige la grammaire, traduit les langues, réécrit professionnellement et analyse les documents.',
        hero_cta: 'Tester maintenant', tool_title: 'La plateforme d\'analyse et de traduction',
        tool_sub: 'Collez un texte, importez un fichier ou choisissez votre module IA',
        upload_main: 'Cliquez ici ou glissez un fichier .txt', trans_label: 'Langue cible pour la traduction :',
        modules_label: 'Modules d\'analyse & IA :', mod_summary: '📄 Résumé', mod_explain: '💡 Explication Simple',
        mod_pro: '💼 Style Professionnel', mod_points: '📌 Convertir en puces', mod_grammar: '✏️ Correcteur',
        mod_translate: '🌐 Traducteur', mod_stats: '📊 Statistiques', btn_run: 'Lancer l\'analyse',
        btn_clear: 'Réinitialiser', ki_warning: 'L\'IA peut faire des erreurs. Vérifiez attentivement les résultats.',
        res_title: 'Résultat', btn_copy: 'Copier', loading_text: 'L\'IA analyse les données...',
        pipe_label: 'Architecture Sécurisée', pipe_title: 'Pipeline de traitement des données',
        pipe_sub: 'Le chemin d\'une chaîne brute vers une fonction Serverless chiffrée',
        step1_title: 'Entrée Frontend', step1_desc: 'L\'utilisateur insère le texte ou charge un fichier. JavaScript extrait la valeur du DOM.',
        step2_title: 'Netlify Function', step2_desc: 'Les données vont au backend. La clé API est masquée en toute sécurité sur le serveur.',
        step3_title: 'Inférence', step3_desc: 'Le modèle linguistique traite le texte via OpenRouter et génère la réponse.',
        step4_title: 'DOM Injection', step4_desc: 'Le résultat retourne au frontend et s\'affiche de manière fluide.',
        char_unit: ' caractères', word_unit: 'Mots', sentence_unit: 'Phrases', time_unit: 'env. {sec} sec.',
        grammar_ok: '🎉 Aucun défaut trouvé ! La grammaire et l\'orthographe sont impeccables.',
        grammar_hint: 'Les suggestions de correction suivantes ont été trouvées :', conn_err: 'Erreur de connexion au serveur.'
    },
    'es-ES': {
        nav_tool: 'Herramienta', nav_how: 'Cómo funciona', btn_dark: 'Modo Oscuro', btn_light: 'Modo Claro',
        hero_title: 'Comprender textos de forma inteligente',
        hero_sub: 'Contexto filtra puntos clave, corrige gramática, traduce idiomas, reescribe profesionalmente y analiza documentos.',
        hero_cta: 'Probar ahora', tool_title: 'La Plataforma de Análisis y Traducción',
        tool_sub: 'Pega un texto, sube un archivo o elige tu módulo de IA',
        upload_main: 'Haz clic aquí o arrastra un archivo .txt', trans_label: 'Idioma de destino para traducción:',
        modules_label: 'Módulos de Análisis e IA:', mod_summary: '📄 Resumen', mod_explain: '💡 Explicación Simple',
        mod_pro: '💼 Estilo Profesional', mod_points: '📌 Convertir en viñetas', mod_grammar: '✏️ Corrector Gramatical',
        mod_translate: '🌐 Traductor', mod_stats: '📊 Métricas de Texto', btn_run: 'Ejecutar Análisis',
        btn_clear: 'Restablecer', ki_warning: 'La IA puede cometer errores. Revise los resultados cuidadosamente.',
        res_title: 'Resultado', btn_copy: 'Copiar', loading_text: 'La IA está analizando los datos...',
        pipe_label: 'Arquitectura Segura', pipe_title: 'Pipeline de Procesamiento de Datos',
        pipe_sub: 'El camino desde una cadena de texto sin formato hasta una función Serverless cifrada',
        step1_title: 'Entrada Frontend', step1_desc: 'El usuario inserta texto o carga un archivo. JavaScript extrae el valor del DOM.',
        step2_title: 'Netlify Function', step2_desc: 'Los datos viajan al backend. La clave API está oculta de forma segura en el servidor.',
        step3_title: 'Inferencia', step3_desc: 'El modelo lingüístico procesa el texto a través de OpenRouter y genera la respuesta.',
        step4_title: 'DOM Injection', step4_desc: 'El resultado regresa al frontend y se despliega de manera fluida.',
        char_unit: ' caracteres', word_unit: 'Palabras', sentence_unit: 'Oraciones', time_unit: 'aprox. {sec} seg.',
        grammar_ok: '🎉 ¡No se encontraron errores! La gramática y la ortografía son impecables.',
        grammar_hint: 'Se encontraron las siguientes notas de corrección:', conn_err: 'Error de conexión con el servidor.'
    }
};

const TITLES = { 
    summary: 'mod_summary', explain: 'mod_explain', rephrase_pro: 'mod_pro',
    rephrase_points: 'mod_points', grammar: 'mod_grammar', translate: 'mod_translate', stats: 'mod_stats' 
};

let activeMode = 'summary';
let currentLang = 'de-DE';

const textarea = document.getElementById('inputText');
const charCount = document.getElementById('charCount');
const runBtn = document.getElementById('runBtn');
const resultWrap = document.getElementById('resultWrap');
const resultBody = document.getElementById('resultBody');
const resultTitle = document.getElementById('resultTitle');
const resultTag = document.getElementById('resultTag');
const translatorOptions = document.getElementById('translatorOptions');
const fileInput = document.getElementById('fileInput');
const uploadZone = document.getElementById('uploadZone');
const loadingIndicator = document.getElementById('loadingIndicator');
const themeToggle = document.getElementById('themeToggle');
const langSelect = document.getElementById('langSelect');

langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    translatePage(currentLang);
});

function translatePage(lang) {
    const dict = TRANSLATIONS[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            if (key === 'hero_title') {
                if (lang === 'de-DE') el.innerHTML = 'Texte intelligent <em class="highlight-word">verstehen</em> und bearbeiten';
                else if (lang === 'en-US') el.innerHTML = 'Understand text <em class="highlight-word">intelligently</em> and edit it';
                else if (lang === 'fr-FR') el.innerHTML = 'Comprendre le texte de manière <em class="highlight-word">intelligente</em>';
                else if (lang === 'es-ES') el.innerHTML = 'Comprender textos de forma <em class="highlight-word">inteligente</em>';
            } else {
                el.textContent = dict[key];
            }
        }
    });
    
    if(resultWrap.classList.contains('show')) {
        resultTitle.textContent = dict[TITLES[activeMode]];
    }
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.querySelector('span').setAttribute('data-i18n', isDark ? 'btn_light' : 'btn_dark');
    themeToggle.firstChild.textContent = isDark ? '☀️ ' : '🌙 ';
    translatePage(currentLang);
});

uploadZone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    uploadZone.querySelector('.upload-text-main').textContent = "📄 " + file.name;
    
    const reader = new FileReader();
    reader.onload = function(evt) {
        textarea.value = evt.target.result;
        charCount.textContent = evt.target.result.length + TRANSLATIONS[currentLang].char_unit;
    };
    reader.readAsText(file);
});

textarea.addEventListener('input', () => { 
    charCount.textContent = textarea.value.trim().length + TRANSLATIONS[currentLang].char_unit; 
});

document.getElementById('modes').addEventListener('click', e => {
    const b = e.target.closest('.mode-btn'); 
    if(!b) return;
    document.querySelectorAll('.mode-btn').forEach(x => x.classList.remove('active'));
    b.classList.add('active'); 
    activeMode = b.dataset.mode;

    if (activeMode === 'translate') {
        translatorOptions.style.display = 'block';
    } else {
        translatorOptions.style.display = 'none';
    }
});

function clearAll() {
    textarea.value = ''; 
    charCount.textContent = '0' + TRANSLATIONS[currentLang].char_unit;
    fileInput.value = '';
    uploadZone.querySelector('.upload-text-main').setAttribute('data-i18n', 'upload_main');
    resultWrap.classList.remove('show'); 
    resultBody.innerHTML = ''; 
    resultTag.style.display = 'none';
    translatorOptions.style.display = 'none';
    loadingIndicator.style.display = 'none';
    document.querySelectorAll('.mode-btn').forEach(x => x.classList.remove('active'));
    document.querySelector('[data-mode="summary"]').classList.add('active');
    activeMode = 'summary';
    translatePage(currentLang);
}

function copyResult() {
    const textToCopy = resultBody.innerText;
    if(!textToCopy) return;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const btnText = document.querySelector('#copyBtn span');
        const oldText = btnText.textContent;
        btnText.textContent = currentLang === 'de-DE' ? 'Kopiert!' : 'Copied!';
        setTimeout(() => { btnText.textContent = oldText; }, 2000);
    });
}

function getLocalStats(text) {
    const words = text.split(/\s+/).filter(x => x.length > 0).length;
    const sentences = text.split(/[.!?]+/).filter(x => x.trim().length > 0).length;
    const sec = Math.max(1, Math.ceil(words / 3));
    const dict = TRANSLATIONS[currentLang];
    return `
        <div class="stat-grid">
            <div class="stat-box"><div class="stat-lbl">${dict.word_unit}</div><div class="stat-val">${words}</div></div>
            <div class="stat-box"><div class="stat-lbl">${dict.sentence_unit}</div><div class="stat-val">${sentences}</div></div>
            <div class="stat-box"><div class="stat-lbl">Tempo</div><div class="stat-val sm">${dict.time_unit.replace('{sec}', sec)}</div></div>
        </div>
    `;
}

async function analyze() {
    const text = textarea.value.trim();
    if(!text) { alert('Bitte gib zuerst einen Text ein!'); return; }
    
    const dict = TRANSLATIONS[currentLang];
    runBtn.disabled = true;
    resultTag.style.display = 'none';
    resultTitle.textContent = dict[TITLES[activeMode]];
    resultWrap.classList.add('show');
    
    loadingIndicator.style.display = 'flex';
    resultBody.innerHTML = '';
    
    if(activeMode === 'stats') {
        loadingIndicator.style.display = 'none';
        resultBody.innerHTML = getLocalStats(text);
        runBtn.disabled = false;
        return;
    }

    if(activeMode === 'grammar') {
        try {
            const response = await fetch("https://api.languagetoolplus.com/v2/check", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ text: text, language: currentLang })
            });
            const data = await response.json();
            const matches = data.matches || [];
            
            loadingIndicator.style.display = 'none';
            resultTag.style.display = 'inline-block';
            resultTag.textContent = matches.length === 0 ? 'OK' : matches.length + ' !';
            resultTag.className = 'result-tag ' + (matches.length === 0 ? 'tag-ok' : 'tag-warn');
            
            if(matches.length === 0) {
                resultBody.innerHTML = `<div class="grammar-ok" style="color:var(--green); font-weight:500;">${dict.grammar_ok}</div>`;
            } else {
                let html = `<div class="result-text" style="margin-bottom:15px;">${dict.grammar_hint}</div>`;
                matches.forEach(m => {
                    let falschesWort = text.substring(m.offset, m.offset + m.length);
                    let vorschlaege = m.replacements.slice(0, 3).map(r => r.value).join(', ') || '---';
                    html += `
                        <div class="grammar-item" style="background:var(--bg3); border:1px solid var(--border); padding:12px; border-radius:var(--r); margin-bottom:10px;">
                            <div class="grammar-diff" style="display:flex; gap:10px; align-items:center; margin-bottom:4px;">
                                <span class="g-old" style="text-decoration:line-through; color:var(--red);">${falschesWort}</span>
                                <span class="g-arrow" style="color:var(--text3);">→</span>
                                <span class="g-new" style="color:var(--green); font-weight:600;">${vorschlaege}</span>
                            </div>
                            <div class="g-explanation" style="font-size:13px; color:var(--text2);">${m.message}</div>
                        </div>
                    `;
                });
                resultBody.innerHTML = html;
            }
        } catch(e) {
            loadingIndicator.style.display = 'none';
            resultBody.innerHTML = `<div class="result-text" style="color:var(--red)">${dict.conn_err}</div>`;
        }
        runBtn.disabled = false;
        return;
    }

    try {
        let modeToSend = "summary"; 
        let textToSend = text;
        
        let targetInstructionLanguage = "Deutsch";
        if(currentLang === 'en-US') targetInstructionLanguage = "English";
        if(currentLang === 'fr-FR') targetInstructionLanguage = "French";
        if(currentLang === 'es-ES') targetInstructionLanguage = "Spanish";

        if (activeMode === 'explain') {
            modeToSend = "summary"; 
            textToSend = `Erkläre den folgenden Text extrem einfach, sodass ihn ein 10-jähriges Kind problemlos versteht. Antworte vollständig in der Sprache: ${targetInstructionLanguage}.\n\nTEXT:\n${text}`;
        } 
        else if (activeMode === 'summary') {
            textToSend = `Fasse diesen Text kompakt zusammen. Nutze prägnante Stichpunkte. Antworte vollständig in der Sprache: ${targetInstructionLanguage}.\n\nTEXT:\n${text}`;
        }
        else if (activeMode === 'rephrase_pro') {
            textToSend = `Schreibe den folgenden Text komplett um. Nutze einen hochprofessionellen, eleganten Stil. Antworte vollständig in der Sprache: ${targetInstructionLanguage}.\n\nTEXT:\n${text}`;
        } 
        else if (activeMode === 'rephrase_points') {
            textToSend = `Extrahiere alle Fakten und wandle sie in eine strukturierte Stichpunkt-Liste um. Antworte vollständig in der Sprache: ${targetInstructionLanguage}.\n\nTEXT:\n${text}`;
        } 
        else if (activeMode === 'translate') {
            const targetLang = document.getElementById('targetLangSelect').value;
            textToSend = `Übersetze den folgenden Text präzise in die Sprache: ${targetLang}. Gib ausnahmslos nur die Übersetzung aus:\n\nTEXT:\n${text}`;
        }

        const response = await fetch("/.netlify/functions/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: textToSend, mode: modeToSend })
        });

        const data = await response.json();
        
        loadingIndicator.style.display = 'none';
        if (data.result) {
            resultBody.innerHTML = `<div class="result-text">${data.result.replace(/\n/g, '<br>')}</div>`;
        } else {
            throw new Error("Error");
        }

    } catch (error) {
        loadingIndicator.style.display = 'none';
        resultBody.innerHTML = `<div class="result-text" style="color:var(--red)">${dict.conn_err}</div>`;
    }
    runBtn.disabled = false;
}
