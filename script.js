const EXAMPLES = {
    news: `Die Schweizer Nationalbank hat ihren Leitzins erneut gesenkt. In einer Mitteilung vom Donnerstag erklärte die SNB, der Zinssatz werde auf 0,25 Prozent reduziert. Begründet wird der Schritt mit der schwachen Inflationsentwicklung und dem starken Franken, der Schweizer Exporteure unter Druck setzt. Ökonomen hatten die Senkung mehrheitlich erwartet, einige hatten jedoch auf eine Pause gehofft.`,
    review: `Ich habe diesen Kopfhörer nun seit drei Wochen intensiv getestet und bin gespalten. Der Klang ist wirklich beeindruckend – kraftvolle Bässe, klare Mitten und keine aufdringlichen Höhen. Die Geräuschunterdrückung funktioniert hervorragend. Leider drückt das Headband nach längerer Nutzung unangenehm, und der Akku hält mit aktivem ANC nur sechs Stunden. Für den Preis von 280 Franken hätte ich mir mehr erhofft.`,
    email: `Guten Morgen Frau Müller, ich hoffe, Sie hatten ein angenehmes Wochenende. Ich wollte mich kurz bei Ihnen melden bezüglich des Projekts, über das wir letzte Woche gesprochen haben. Leider bin ich noch nicht dazu gekommen, die Unterlagen durchzuschauen – die Woche war sehr turbulent. Ich werde sie bis Mittwoch fertig haben und Ihnen dann umgehend zusenden. Entschuldigung für die Verzögerung und vielen Dank für Ihr Verständnis.`,
    essay: `Künstliche Intelligenz verändert unsere Gesellschaft grundlegend – schneller als viele erwartet haben. Besonders im Bildungsbereich stellt sich die Frage, wie Schulen und Universitäten damit umgehen sollen. Einerseits können KI-Tools Lernende unterstützen und individualisiertes Lernen ermöglichen. Andererseits besteht die Gefahr, dass eigenständiges Denken verkümmert. Eine ausgewogene Medienkompetenz ist wichtiger denn je.`
};

const TITLES = { 
    summary: 'Zusammenfassung', 
    explain: 'Einfache Erklärung (für Schüler)', 
    quiz: 'Generiertes Quiz (5 Fragen & Lösungen)', 
    flashcards: 'Erstellte Lernkarten', 
    grammar: 'Grammatik- & Stilprüfung', 
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
});

function clearAll() {
    textarea.value = ''; 
    charCount.textContent = '0 Zeichen';
    resultWrap.classList.remove('show'); 
    resultBody.innerHTML = ''; 
    resultTag.style.display = 'none';
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
    resultBody.innerHTML = '<div class="result-text">KI analysiert den Text über Netlify Functions...</div>';
    
    // Lokale Text-Metriken (ohne Server-Call)
    if(activeMode === 'stats') {
        resultBody.innerHTML = getLocalStats(text);
        runBtn.disabled = false;
        return;
    }

    // Externe Grammatikprüfung via LanguageTool API
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
            
            resultTag.style.display = 'inline-block';
            resultTag.textContent = matches.length === 0 ? 'SYNTAX OK' : matches.length + ' HINWEISE';
            resultTag.className = 'result-tag ' + (matches.length === 0 ? 'tag-ok' : 'tag-warn');
            
            if(matches.length === 0) {
                resultBody.innerHTML = `<div class="grammar-ok">🎉 Keine Fehler gefunden! Der Stil und die Grammatik entsprechen den Regeln.</div>`;
            } else {
                let html = '';
                matches.forEach(m => {
                    let fehlerhaftesWort = text.substring(m.offset, m.offset + m.length) || "Unklarheit";
                    let vorschlag = m.replacements.slice(0, 3).map(r => r.value).join(', ') || 'Kein Vorschlag';
                    html += `
                        <div class="grammar-item">
                            <div class="grammar-diff">
                                <span class="g-old">${fehlerhaftesWort}</span>
                                <span class="g-arrow">→</span>
                                <span class="g-new">${vorschlag}</span>
                            </div>
                            <div class="g-explanation">${m.message}</div>
                        </div>
                    `;
                });
                resultBody.innerHTML = html;
            }
        } catch(e) {
            resultBody.innerHTML = `<div class="result-text" style="color:var(--red)">Fehler bei der Grammatikprüfung.</div>`;
        }
        runBtn.disabled = false;
        return;
    }

    // KI-Abfragen (Zusammenfassung, Erklären, Quiz, Lernkarten) rufen deine Netlify Function auf
    try {
        const response = await fetch("/.netlify/functions/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text,
                mode: activeMode
            })
        });

        const data = await response.json();
        
        if (data.result) {
            // Zeige die KI-Antwort an und konvertiere Zeilenumbrüche in lesbares HTML
            resultBody.innerHTML = `<div class="result-text">${data.result.replace(/\n/g, '<br>')}</div>`;
        } else {
            throw new Error("Fehlerhafte Server-Antwort");
        }

    } catch (error) {
        resultBody.innerHTML = `<div class="result-text" style="color:var(--red)">Fehler bei der Verbindung zur Netlify Function. Stelle sicher, dass der API-Key im Netlify Dashboard hinterlegt ist.</div>`;
    }
    runBtn.disabled = false;
}
