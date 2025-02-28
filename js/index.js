function openQuizModal() {
  document.getElementById("quizModal").style.display = "block";
}

document.querySelector(".close").onclick = function() {
  document.getElementById("quizModal").style.display = "none";
}

window.onclick = function(event) {
  if (event.target === document.getElementById("quizModal")) {
    document.getElementById("quizModal").style.display = "none";
  }
}