async function analyze(mode) {
    const text = document.getElementById("input").value;
    const output = document.getElementById("output");

    output.innerHTML = "⏳ KI denkt...";

    const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        body: JSON.stringify({ text, mode })
    });

    const data = await res.json();
    output.innerHTML = data.result;
}
