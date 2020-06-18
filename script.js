var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

// Time Given to Solve Problems
var secondsLeft = 150;

// Start Time
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time :" + secondsLeft;

    // When Timer Runs Out
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      timeUpMessage();
    }

  }, 1000);
}

// When Given Time is Done
function timeUpMessage() {
  mainEl.textContent = "Time is Up!"
}

setTime();