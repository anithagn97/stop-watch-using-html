let isRunning = false;
let time = 0;
let interval;
const timeDisplay = document.getElementById("timeDisplay");

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById("startStopBtn").innerText = "Start";
    } else {
        interval = setInterval(updateTime, 1000);
        document.getElementById("startStopBtn").innerText = "Stop";
    }
    isRunning = !isRunning;
}

function updateTime() {
    time++;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    timeDisplay.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(unit) {
    return unit < 10 ? `0${unit}` : unit;
}

function reset() {
    clearInterval(interval);
    time = 0;
    timeDisplay.innerText = "00:00:00";
    isRunning = false;
    document.getElementById("startStopBtn").innerText = "Start";
}
