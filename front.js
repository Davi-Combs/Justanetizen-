const response = await fetch("/api/openai", {
  method: "POST",
  body: JSON.stringify({ message: userMessage }),
});
const data = await response.json();   
