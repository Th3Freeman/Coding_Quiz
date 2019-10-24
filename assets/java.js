var startQuiz = document.getElementById("quizStart");

startQuiz.addEventListener("click", function (event) {
    document.getElementById("Home").classList.add("d-none");
    document.getElementById("quizScreen").classList.remove("d-none");
});

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

];


var questionDisplay = document.getElementById("quizQuestions");
var answerDisplay = document.getElementById("quizAnswers");





for (var i = 0; i < )