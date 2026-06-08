export async function handler(event) {
    const { text, mode } = JSON.parse(event.body);

    let prompt = "";

    if (mode === "summary") {
        prompt = "Fasse diesen Text kurz und klar zusammen:";
    }

    if (mode === "explain") {
        prompt = "Erkläre diesen Text einfach für Schüler:";
    }

    if (mode === "quiz") {
        prompt = "Erstelle 5 Quizfragen mit Lösungen aus diesem Text:";
    }

    if (mode === "flashcards") {
        prompt = "Erstelle Lernkarten (Frage + Antwort) aus diesem Text:";
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + process.env.OPENROUTER_API_KEY,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "openai/gpt-4o-mini",
            messages: [
                { role: "system", content: "Du bist ein Lernassistent für Schüler." },
                { role: "user", content: prompt + "\n\nTEXT:\n" + text }
            ]
        })
    });

    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify({
            result: data.choices[0].message.content
        })
    };
}
