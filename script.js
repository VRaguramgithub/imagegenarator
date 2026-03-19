// Handle image upload
function handleUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('output').innerHTML =
        `<img src="${e.target.result}" alt="Uploaded Image" style="max-width:80%; border:2px solid #ccc; border-radius:10px;">`;
    };
    reader.readAsDataURL(file);
  }
}

// Handle prompt styling
function applyPrompt() {
  const prompt = document.getElementById('prompt').value;
  if (prompt.trim() !== "") {
    document.getElementById('output').innerHTML += `<p>Style applied: ${prompt}</p>`;
  }
}
