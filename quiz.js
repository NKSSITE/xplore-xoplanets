function submitQuiz() {
  const form = document.getElementById('quizForm');
  const selectedAnswer = form.querySelector('input[name="q1"]:checked');
  const result = document.getElementById('quizResult');
  const nextPageBtn = document.getElementById('nextPageBtn');

  // Check if an answer was selected
  if (!selectedAnswer) {
    result.innerHTML = "Please select an answer.";
    return;
  }

  // Check if the correct answer is selected
  if (selectedAnswer.value === "B") {
    result.innerHTML = "Correct! An exoplanet is a planet outside our solar system.";
    result.style.color = "green";
    nextPageBtn.style.display = "block"; // Show the next page button
  } else {
    result.innerHTML = "Incorrect. Please try again!";
    result.style.color = "red";
    nextPageBtn.style.display = "none"; // Hide the next page button
  }
}
