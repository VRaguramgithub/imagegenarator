let uploadedImage = null;

function handleUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    uploadedImage = document.createElement("img");
    uploadedImage.src = e.target.result;
    uploadedImage.id = "userImage";
    const output = document.getElementById("output");
    output.innerHTML = ""; // clear old content
    output.appendChild(uploadedImage);
  };

  reader.readAsDataURL(file);
}

function applyPrompt() {
  const prompt = document.getElementById("prompt").value.toLowerCase();
  if (!uploadedImage) return;

  if (prompt.includes("cartoon")) {
    uploadedImage.style.filter = "contrast(200%) saturate(150%)";
  } else if (prompt.includes("vintage")) {
    uploadedImage.style.filter = "sepia(80%)";
  } else if (prompt.includes("neon")) {
    uploadedImage.style.boxShadow = "0 0 20px magenta";
  } else {
    uploadedImage.style.filter = "none";
    uploadedImage.style.boxShadow = "none";
  }
}
