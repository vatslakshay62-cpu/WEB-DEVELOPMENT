// ---------------------------------------------
// JavaScript Quiz Game (Console Based Quiz)
// Developed for assignment: Arrays, Loops, Functions, Conditionals, Score Tracking
// ---------------------------------------------

// Quiz Questions Array
const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is the chemical formula of water?", answer: "h2o" },
    { question: "Who is known as the Father of Computers?", answer: "charles babbage" },
    { question: "Which gas do plants absorb during photosynthesis?", answer: "carbon dioxide" }
];

// Function to run the quiz
function runQuiz() {
    let score = 0;  // Score initialized

    // Loop through all quiz questions
    for (let i = 0; i < quizQuestions.length; i++) {
        // Prompt user for answer
        let userAnswer = prompt(quizQuestions[i].question);

        // Normalize user input
        userAnswer = userAnswer.toLowerCase().trim();

        // Check answer and update score
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert("Wrong ❌\nCorrect Answer: " + quizQuestions[i].answer);
        }
    }

    // Display final score
    alert("Quiz Completed! 🎯\nYour Score: " + score + " / " + quizQuestions.length);
}

// Run the quiz
runQuiz();