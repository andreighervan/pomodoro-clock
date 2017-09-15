/**
 * Created by Andrei on 9/15/2017.
 */
function breakIncreaseFunction () {

    document.getElementById("break").innerHTML = breakTime += 1;
    totalBreakTimeSeconds = breakTime * 60;

} // end of countdown function

function breakDecreaseFunction () {

    document.getElementById("break").innerHTML = breakTime -= 1;
    totalBreakTimeSeconds = breakTime * 60;


} // end of countdown function

function timeIncreaseFunction () {

    if (totalTime < 60) {
        document.getElementById("time").innerHTML = totalTime += 1;
        document.getElementById("countdown").innerHTML = totalCountDown = totalTime;
        totalCountDownSeconds = totalCountDown * 60;
    }

} // end of countdown function

function timeDecreaseFunction () {
    if (totalTime > 0) {
        document.getElementById("time").innerHTML = totalTime -= 1;
        document.getElementById("countdown").innerHTML = totalCountDown = totalTime;
        totalCountDownSeconds = totalCountDown * 60;
    }

} // end of countdown function

var timer;
var timerBreak;

function countdownFunction () {

    // These variables must be evaluated each time the function is rerun because
    // the totalCountDownSeconds is changing each recursive iteration.
    minutes = parseInt(totalCountDownSeconds / 60);
    seconds = parseInt(totalCountDownSeconds % 60);

    if (totalCountDownSeconds > 0) {
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        document.getElementById("countdown").innerHTML = (minutes + ":" + seconds);
        totalCountDownSeconds -= 1;
        timer = setTimeout(countdownFunction, 1000);
    }
    if (totalCountDownSeconds == 0) {
        document.getElementById("countdown").innerHTML = "All Done!";
        clearTimeout(timer);
        timerBreak = setTimeout(breakFunction, 1000);
    }

} // end of countdown function

var breakTimer;

function breakFunction () {

    // These variables must be evaluated each time the function is rerun because
    // the totalCountDownSeconds is changing each recursive iteration.
    breakMinutes = parseInt(totalBreakTimeSeconds / 60);
    breakSeconds = parseInt(totalBreakTimeSeconds % 60);

    if (totalBreakTimeSeconds > 0) {
        if (breakSeconds < 10) {
            breakSeconds = "0" + breakSeconds;
        }

        document.getElementById("countdown").innerHTML = (breakMinutes + ":" + breakSeconds);
        totalBreakTimeSeconds -= 1;
        breakTimer = setTimeout(breakFunction, 1000);
    }
    if (totalBreakTimeSeconds == 0) {
        document.getElementById("countdown").innerHTML = "Your break is over!"
        clearTimeout(breakTimer);
    }
} // end of breakFunction

function stopFunction () {
    clearTimeout(timer);
    clearTimeout(breakTimer);
    clearTimout(timerBreak);
}

function resetFunction () {

    totalTime = 30;
    totalCountDown = totalTime;
    totalCountDownSeconds = totalCountDown * 60;
    breakTime = 5;
    document.getElementById("countdown").innerHTML = totalCountDown;
    document.getElementById("time").innerHTML = totalTime;
    document.getElementById("break").innerHTML = breakTime;

} // end of countdown function

// These are one time variables which will only be updated from within a function
var totalTime = 30;
var breakTime = 5;
var totalCountDown = totalTime;

// These are one time variables which will only be updated from within a function
var totalCountDownSeconds = totalCountDown * 60;
var totalBreakTimeSeconds = breakTime * 60;

// Initial display of times
document.getElementById("break").innerHTML = breakTime;
document.getElementById("time").innerHTML = totalTime;
document.getElementById("countdown").innerHTML = totalCountDown;

var breakButtonIncrease = document.getElementById("breakButtonIncrease");
breakButtonIncrease.addEventListener("click", breakIncreaseFunction, false);
var breakButtonDecrease = document.getElementById("breakButtonDecrease");
breakButtonDecrease.addEventListener("click", breakDecreaseFunction, false);

var timeButtonIncrease = document.getElementById("timeButtonIncrease");
timeButtonIncrease.addEventListener("click", timeIncreaseFunction, false);
var timeButtonDecrease = document.getElementById("timeButtonDecrease");
timeButtonDecrease.addEventListener("click", timeDecreaseFunction, false);

var startButton = document.getElementById("countdownButton");
startButton.addEventListener("click", countdownFunction, false);

var stopButton = document.getElementById("countdownStopButton");
stopButton.addEventListener("click", stopFunction, false);

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetFunction, false);