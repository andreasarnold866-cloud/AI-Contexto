const EXAMPLES = {
    news: `Die Schweizer Nationalbank hat ihren Leitzins erneut gesenkt. In einer Mitteilung vom Donnerstag erklärte die SNB, der Zinssatz werde auf 0,25 Prozent reduziert. Begründet wird der Schritt mit der schwachen Inflationsentwicklung und dem starken Franken, der Schweizer Exporteure unter Druck setzt. Ökonomen hatten die Senkung mehrheitlich erwartet, einige hatten jedoch auf eine Pause gehofft.`,
    essay: `Künstliche Intelligenz verändert unsere Gesellschaft grundlegend – schneller als viele erwartet haben. Besonders im Bildungsbereich stellt sich die Frage, wie Schulen und Universitäten damit umgehen sollen. Einerseits können KI-Tools Lernende unterstützen und individualisiertes Lernen ermöglichen. Andererseits besteht die Gefahr, dass eigenständiges Denken verkümmert. Eine ausgewogene Medienkompetenz ist wichtiger denn je.`,
    email: `guten morgen frau müller, ich hofe sie hatten ein chills wochenende. ich wolte fragen wegem dem projekt wo wir besprochen haben. ich habe leider noch keine zeit gehabt zum reinschaun, weil es war vol stressig. ich thue es bis mitwuch fertig machen und schicke es dan.`
};

const TITLES = { 
    summary: 'Zusammenfassung', 
    explain: 'Einfache Erklärung', 
    rephrase_pro: 'Umschreiben: Professioneller Stil',
    rephrase_points: 'Umschreiben: In prägnante Stichpunkte',
    grammar: 'Grammatik- & Stilprüfung', 
    translate: 'KI-Übersetzung',
    stats: 'Berechnete Text-Metriken' 
};

let activeMode = 'summary';

const textarea = document.getElementById('inputText');
const charCount = document.getElementById('charCount');
const runBtn = document.getElementById('runBtn');
const resultWrap = document.getElementById('resultWrap');
const resultBody = document.getElementById('resultBody');
const resultTitle = document.getElementById('resultTitle');
const resultTag = document.getElementById('resultTag');
const translatorOptions = document.getElementById('translatorOptions');
const fileInput = document.getElementById('fileInput');
const loadingIndicator = document.getElementById('loadingIndicator');
const themeToggle = document.getElementById('themeToggle');

// FEATURE 1: Dark Mode Logik via Class-Toggle am Body
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.querySelector('span').textContent = isDark ? 'Light Mode' : 'Dark Mode';
    themeToggle.firstChild.textContent = isDark ? '☀️ ' : '🌙 ';
});

// FEATURE 2: Lokalen Datei-Upload verarbeiten (.txt einlesen)
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(evt) {
        textarea.value = evt.target.result;
        charCount.textContent = evt.target.result.length + ' Zeichen';
    };
    reader.readAsText(file);
});

textarea.addEventListener('input', () => { 
    charCount.textContent = textarea.value.trim().length + ' Zeichen'; 
});

document.getElementById('examples').addEventListener('click', e => {
    const b = e.target.closest('.ex-btn'); 
    if(!b) return;
    const key = b.dataset.ex;
    if(EXAMPLES[key]) { 
        textarea.value = EXAMPLES[key]; 
        charCount.textContent = EXAMPLES[key].length + ' Zeichen'; 
    }
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
    charCount.textContent = '0 Zeichen';
    fileInput.value = '';
    resultWrap.classList.remove('show'); 
    resultBody.innerHTML = ''; 
    resultTag.style.display = 'none';
    translatorOptions.style.display = 'none';
    loadingIndicator.style.display = 'none';
    document.querySelectorAll('.mode-btn').forEach(x => x.classList.remove('active'));
    document.querySelector('[data-mode="summary"]').classList.add('active');
    activeMode = 'summary';
}

function copyResult() {
    const textToCopy = resultBody.innerText;
    if(!textToCopy) return;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const btnText = document.querySelector('#copyBtn span');
        btnText.textContent = 'Kopiert!';
        setTimeout(() => { btnText.textContent = 'Kopieren'; }, 2000);
    });
}

function getLocalStats(text) {
    const words = text.split(/\s+/).filter(x => x.length > 0).length;
    const sentences = text.split(/[.!?]+/).filter(x => x.trim().length > 0).length;
    const sec = Math.max(1, Math.ceil(words / 3));
    return `
        <div class="stat-grid">
            <div class="stat-box"><div class="stat-lbl">Wörter</div><div class="stat-val">${words}</div></div>
            <div class="stat-box"><div class="stat-lbl">Sätze</div><div class="stat-val">${sentences}</div></div>
            <div class="stat-box"><div class="stat-lbl">Lesezeit</div><div class="stat-val sm">ca. ${sec} Sek.</div></div>
        </div>
    `;
}

async function analyze() {
    const text = textarea.value.trim();
    if(!text) { alert('Bitte gib zuerst einen Text ein!'); return; }
    
    runBtn.disabled = true;
    resultTag.style.display = 'none';
    resultTitle.textContent = TITLES[activeMode];
    resultWrap.classList.add('show');
    
    // FEATURE 4: Schalte Ladeindikator ein und leere altes Ergebnis
    loadingIndicator.style.display = 'flex';
    resultBody.innerHTML = '';
    
    // 1. LOKALE METRIKEN
    if(activeMode === 'stats') {
        loadingIndicator.style.display = 'none';
        resultBody.innerHTML = getLocalStats(text);
        runBtn.disabled = false;
        return;
    }

    // 2. GRAMMATIKPRÜFUNG
    if(activeMode === 'grammar') {
        try {
            const lang = document.getElementById('langSelect')?.value || 'de-DE';
            const response = await fetch("https://api.languagetoolplus.com/v2/check", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ text: text, language: lang })
            });
            const data = await response.json();
            const matches = data.matches || [];
            
            loadingIndicator.style.display = 'none';
            resultTag.style.display = 'inline-block';
            resultTag.textContent = matches.length === 0 ? 'SYNTAX OK' : matches.length + ' HINWEISE';
            resultTag.className = 'result-tag ' + (matches.length === 0 ? 'tag-ok' : 'tag-warn');
            
            if(matches.length === 0) {
                resultBody.innerHTML = `<div class="grammar-ok" style="color:var(--green); font-weight:500;">🎉 Keine Fehler gefunden! Grammatik und Rechtschreibung sind einwandfrei.</div>`;
            } else {
                let html = '<div class="result-text" style="margin-bottom:15px;">Folgende Korrekturhinweise wurden gefunden:</div>';
                matches.forEach(m => {
                    let falschesWort = text.substring(m.offset, m.offset + m.length);
                    let vorschlaege = m.replacements.slice(0, 3).map(r => r.value).join(', ') || 'Kein Vorschlag';
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
            resultBody.innerHTML = `<div class="result-text" style="color:var(--red)">Fehler bei der Grammatikprüfung.</div>`;
        }
        runBtn.disabled = false;
        return;
    }

    // 3. NETLIFY-FUNCTION SENDER (Summary, Explain, Rephrase & Translate)
    try {
        let modeToSend = "summary"; // Nutze immer den Summary Kanal deiner chat.js
        let textToSend = text;

        if (activeMode === 'explain') {
            modeToSend = "explain"; // Reiner Nativ-Modus aus deiner chat.js
        } 
        // FEATURE 3: Unsichtbare Systembefehl-Tricks für deine Umschreiber
        else if (activeMode === 'rephrase_pro') {
            textToSend = `Schreibe den folgenden Text komplett um. Nutze einen hochprofessionellen, akademischen und geschäftsmäßig korrekten Stil. Optimiere den Satzbau:\n\nTEXT:\n${text}`;
        } 
        else if (activeMode === 'rephrase_points') {
            textToSend = `Wandle den gesamten Informationsgehalt des folgenden Textes in eine strukturierte, leicht lesbare Liste aus prägnanten Stichpunkten (mit Aufzählungszeichen) um:\n\nTEXT:\n${text}`;
        } 
        else if (activeMode === 'translate') {
            const targetLang = document.getElementById('targetLangSelect').value;
            textToSend = `Übersetze den folgenden Text präzise in die Sprache: ${targetLang}. Gib ausnahmslos NUR die fertige Übersetzung aus, keine Einleitungssätze!:\n\nTEXT:\n${text}`;
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
            throw new Error("Fehlerhafte Antwort");
        }

    } catch (error) {
        loadingIndicator.style.display = 'none';
        resultBody.innerHTML = `<div class="result-text" style="color:var(--red)">Fehler bei der Verbindung zur Netlify-Function. Überprüfe den API-Key im Dashboard.</div>`;
    }
    runBtn.disabled = false;
}
