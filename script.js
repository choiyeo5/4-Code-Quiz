var mainEl = document.querySelector(".main");
var questionsEl = document.querySelector(".questions");
var initialEl = document.querySelector(".initial");
var highscoresEl = document.querySelector(".highscores");
var answer1El = document.querySelector(".answer1");
var answer2El = document.querySelector(".answer2");
var answer3El = document.querySelector(".answer3");
var answer4El = document.querySelector(".answer4");
var resultEl = document.querySelector(".result");

var nameInput = document.querySelector("#name-text");
var nameForm = document.querySelector("#name-form");
var startButton = document.querySelector("#start");
var backButton = document.querySelector("#back");
var clearButton = document.querySelector("#clear");
var timerEl = document.querySelector("#time");
var eachQuestion = document.querySelector("#question");
var finalScore = document.querySelector("#final-score");
var highscoreList = document.querySelector("#highscore-list");

// HELP!! Not sure how to call object from different javascript files
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
    }
];

var secondsRemaining = questions.length * 15;
var eachTime = 15;
var ques = 0;
var score = 0;
var startTime = 0;
var names = ["Christine", "Yeon Soo"];
var scores = [23, 20];

// Start the timer and bring up the Questions Page
function startTimer() {

    startTime = secondsRemaining;
    mainEl.classList.add("hide");
    questionsEl.classList.remove("hide");

    interval = setInterval(function() {
        secondsRemaining--;
        timerEl.textContent = secondsRemaining;

        if (secondsRemaining === 0) {
            stopTimer();
        } else {
            showQuestions();
        }
    }, 1000);
}

// Stop the timer and bring up the Initial Input Page
function stopTimer() {
    questionsEl.classList.add("hide");
    initialEl.classList.remove("hide");

    clearInterval(interval);
    timerEl.textContent = "0";
    finalScore.textContent = score;
}

// Asks for the initials for Highscore Page
nameForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var nameText = nameInput.value.trim();
    var index = names.length;
  
    // Return from function early if submitted todoText is blank
    if (nameText === "") {
      return;
    }

    for (var j=0; j<names.length; j++) {
        if (scores[j] < score) {
            index = j-1;
            console.log(index);
        }
    }

    // Add new name and score to names and scores array, clear the input
    scores.splice(index, 0, score);
    names.splice(index, 0, nameText);
    nameInput.value = "";
  
    highscoreView();
});

function highscoreView() {
    highscoresEl.classList.remove("hide");
    initialEl.classList.add("hide");

    highscoreList.innerHTML = "";

    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var scoreEach = scores[i];
    
        var li = document.createElement("li");
        li.textContent = name  + " - " + scoreEach;
        li.setAttribute("data-index", i);

        highscoreList.appendChild(li);
    }
}

// Go Back to the start Page and reset time remaining
backButton.addEventListener("click", function(event) {
    event.preventDefault();

    mainEl.classList.remove("hide");
    highscoresEl.classList.add("hide");
    secondsRemaining = questions.length * 15;
    ques = 0;
    score = 0;
    startTime = 0;
});

// Clear the highscore List
clearButton.addEventListener("click", function(event) {
    event.preventDefault();

    highscoreList.innerHTML = "";
    names = [];
    scores = [];
});

// Show Questions
function showQuestions() {
    eachQuestion.textContent = questions[ques].title;
    answer1El.textContent = questions[ques].choices[0];
    answer2El.textContent = questions[ques].choices[1];
    answer3El.textContent = questions[ques].choices[2];
    answer4El.textContent = questions[ques].choices[3];
}

// Check Answer
answer1El.addEventListener("click", function(event){
    event.preventDefault();

    if (questions[ques].choices[0] == questions[ques].answer) {
        ques++;
        score = score + 15 - (startTime - secondsRemaining);
        resultEl.textContent = "Success!"
        if (ques === questions.length) {
            stopTimer();
        } else {
            startTime = secondsRemaining;
            showQuestions();
        }
    } else {
        secondsRemaining = secondsRemaining - 3;
        resultEl.textContent = "Wrong!"
    }
});

answer2El.addEventListener("click", function(event){
    event.preventDefault();

    if (questions[ques].choices[1] == questions[ques].answer) {
        ques++;
        score = score + 15 - (startTime - secondsRemaining);
        resultEl.textContent = "Success!"
        if (ques === questions.length) {
            stopTimer();
        } else {
            startTime = secondsRemaining;
            showQuestions();
        }
    } else {
        secondsRemaining = secondsRemaining - 3;
        resultEl.textContent = "Wrong!"
    }
});

answer3El.addEventListener("click", function(event){
    event.preventDefault();

    if (questions[ques].choices[2] == questions[ques].answer) {
        ques++;
        score = score + 15 - (startTime - secondsRemaining);
        resultEl.textContent = "Success!"
        if (ques === questions.length) {
            stopTimer();
        } else {
            startTime = secondsRemaining;
            showQuestions();
        }
    } else {
        secondsRemaining = secondsRemaining - 3;
        resultEl.textContent = "Wrong!"
    }
});

answer4El.addEventListener("click", function(event){
    event.preventDefault();

    if (questions[ques].choices[3] == questions[ques].answer) {
        ques++;
        score = score + 15 - (startTime - secondsRemaining);
        resultEl.textContent = "Success!"
        if (ques === questions.length) {
            stopTimer();
        } else {
            startTime = secondsRemaining;
            showQuestions();
        }
    } else {
        secondsRemaining = secondsRemaining - 3;
        resultEl.textContent = "Wrong!"
    }
});

startButton.addEventListener("click", startTimer);