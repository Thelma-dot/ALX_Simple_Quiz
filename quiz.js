// Define the function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Retrieve the selected radio button
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Access the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Check if an answer was selected
    if (userAnswerElement) {
        const userAnswer = userAnswerElement.value; // Extract the value of the selected radio button

        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedbackElement.textContent = "Please select an answer before submitting.";
    }
}

// Add an event listener to the "Submit Answer" button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
