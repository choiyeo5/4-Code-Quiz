var mainEl = document.querySelector(".main");
var questionsEl = document.querySelector(".questions");
var initialEl = document.querySelector(".initial");
var highscoresEl = document.querySelector(".highscores");
var answer1El = document.querySelector(".answer1");
var answer2El = document.querySelector(".answer2");
var answer3El = document.querySelector(".answer3");
var answer4El = document.querySelector(".answer4");

var nameInput = document.querySelector("#name-text");
var nameForm = document.querySelector("#name-form");
var startButton = document.querySelector("#start");
var backButton = document.querySelector("#back");
var clearButton = document.querySelector("#clear");
var timerEl = document.querySelector("#time");
var eachQuestion = document.querySelector("#question");
var highscoreList = document.querySelector("#highscore-list");

var secondsRemaining = 6;
var ques = 0;
var names = ["Christine", "Yeon Soo"];

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

// Start the timer and bring up the Questions Page
function startTimer() {

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
}

// Asks for the initials for Highscore Page
nameForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var nameText = nameInput.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (nameText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    names.push(nameText);
    nameInput.value = "";
  
    highscoreView();
});

function highscoreView() {
    highscoresEl.classList.remove("hide");
    initialEl.classList.add("hide");

    highscoreList.innerHTML = "";

    for (var i = 0; i < names.length; i++) {
        var name = names[i];
    
        var li = document.createElement("li");
        li.textContent = name;
        li.setAttribute("data-index", i);

        highscoreList.appendChild(li);
    }
}

// Go Back to the start Page and reset time remaining
backButton.addEventListener("click", function(event) {
    event.preventDefault();

    mainEl.classList.remove("hide");
    highscoresEl.classList.add("hide");
    secondsRemaining = 6;
});

// Clear the highscore List
clearButton.addEventListener("click", function(event) {
    event.preventDefault();

    highscoreList.innerHTML = "";
    names = [];
});

// Show Questions
function showQuestions() {
    eachQuestion.textContent = questions[ques].title;
    answer1El.textContent = "1. " + questions[ques].choices[0];
    answer2El.textContent = "2. " + questions[ques].choices[1];
    answer3El.textContent = "3. " + questions[ques].choices[2];
    answer4El.textContent = "4. " + questions[ques].choices[3];
    
}

startButton.addEventListener("click", startTimer);