async function generate() {
  const prompt = document.getElementById("prompt").value;

  const res = await fetch("https://clothes-czdl.onrender.com/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  if (data.imageB64) {
    document.getElementById("result").innerHTML =
      `<h3>Generated Image:</h3><img src="data:image/png;base64,${data.imageB64}" alt="AI"/>`;
  } else {
    document.getElementById("result").innerHTML = "<p>❌ Failed to generate image.</p>";
  }
}
