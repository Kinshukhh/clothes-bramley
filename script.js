async function generate() {
  const prompt = document.getElementById("prompt").value;
  
  const res = await fetch("https://clothes-czdl.onrender.com/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  if (data.images && data.images[0]) {
    const imgData = data.images[0].b64Json;
    document.getElementById("result").innerHTML =
      `<h3>Generated Image:</h3><img src="data:image/png;base64,${imgData}" alt="AI"/>`;
  } else {
    document.getElementById("result").innerHTML = "<p>❌ Failed to generate image.</p>";
  }
}
