var questionDisplay = document.getElementById("quizQuestions");
var answerDisplay = document.getElementById("quizAnswers");
var startQuiz = document.getElementById("quizStart");


startQuiz.addEventListener("click", function (event) {
    document.getElementById("Home").classList.add("d-none");
    document.getElementById("quizScreen").classList.remove("d-none");
    questionDisplay.textContent = questions[0].title;
   
    for (var i = 0; i < questions[0].choices.length; i++) {
        var multipleChoice = document.getElementById("options" + i);
        multipleChoice.text = questions[0].choices[i];
    };

});

function chosenOption(){
    var answers = document.getElementsByClassName("answers").text
    for (var i = 0; i < questions.length; i++){
        for (var x = 0; x < questions[i].choices.length; x++) {
            var multipleChoice = document.getElementById("options" + i);
            multipleChoice.text = questions[0].choices[x];
        };       
    }
    
    if (
        answers===questions[i].answer
    ){
        alert("Correct!!!")
        
    }
    else(
        alert("Wrong!!!")
    )
    ;
    console.log (document.getElementsByClassName("answers").text)
};


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
