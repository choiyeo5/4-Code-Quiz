var timeEl = document.querySelector(".time");
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

var questions = [
    // I could not fetch data from questions.js
    // Please do inform me how I can do that. I have tried many things. No success.
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    }
  ];

// Time Given to Solve Problems
var secondsLeft = 5;

// Start Time
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time : " + secondsLeft;

    // When Timer Runs Out
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      showResults();
    }

  }, 1000);
}

function buildQuiz(){
    quizContainer.textContent = "Quiz Started" + alert(questions.length);

    for (var i = 0; i < questions.length; i++) {
        quizContainer.textContent += "d" + "<br>";
    }
}

// Show Results
function showResults(){
}

// display quiz right away
buildQuiz();

setTime();