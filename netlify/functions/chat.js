export async function handler(event) {

  const { input } = JSON.parse(event.body);

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + process.env.OPENROUTER_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Du bist ein hilfreicher Lernassistent für Schüler."
        },
        {
          role: "user",
          content: input
        }
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
