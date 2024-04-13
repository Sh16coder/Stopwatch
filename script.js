let timer;
let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').innerText = 'Start';
        isRunning = false;
    } else {
        timer = setInterval(updateStopwatch, 1000);
        document.getElementById('startStop').innerText = 'Stop';
        isRunning = true;
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('startStop').innerText = 'Start';
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
