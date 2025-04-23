
async function processCommand() {
  const input = document.getElementById("userInput").value;
  const output = document.getElementById("responseOutput");

  output.innerText = "Command logged. Processing...";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY_HERE"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: input }],
      temperature: 0.7
    })
  });

  const data = await response.json();
  output.innerText = data.choices?.[0]?.message?.content || "No response.";
}
