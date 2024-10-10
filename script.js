function toggleAnswer(button) {
  const answer = button.nextElementSibling;
  const isVisible = answer.style.display === "block";
  answer.style.display = isVisible ? "none" : "block";
}
  // Function to update the word count dynamically
  function updateWordCount() {
  const inputText = document.getElementById("inputdata").value;
  const wordCount = inputText.length;
  document.getElementById("wordCount").innerText = wordCount;
}

// Function to handle file uploads
function handleFileUpload() {
  const fileInput = document.getElementById("file-upload");
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("inputdata").value = e.target.result;
      updateWordCount(); // Update word count after file upload
    };
    reader.readAsText(file);
  }
}

// Placeholder for scan functionality
function scanText() {
  const inputText = document.getElementById("inputdata").value;
  if (inputText) {
    alert("Scanning for plagiarism...");
    // Here you can add the logic for plagiarism checking
  } else {
    alert("Please enter text or upload a file first.");
  }
}