// Timer Variables
let timerInterval;
let timerTimeLeft = 0;

function startTimer() {
    const minutes = parseInt(document.getElementById('timer-minutes').value, 10);
    if (isNaN(minutes) || minutes <= 0) {
        alert('Bitte eine gültige Anzahl von Minuten eingeben.');
        return;
    }

    timerTimeLeft = minutes * 60;
    updateTimerDisplay();

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timerTimeLeft--;
        updateTimerDisplay();

        if (timerTimeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Timer abgelaufen!');
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerTimeLeft = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerTimeLeft / 60);
    const seconds = timerTimeLeft % 60;
    document.getElementById('timer-display').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Stopwatch Variables
let stopwatchInterval;
let stopwatchTime = 0;
let stopwatchRunning = false;

function startStopwatch() {
    if (stopwatchRunning) return;
    stopwatchRunning = true;

    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        updateStopwatchDisplay();
    }, 1000);
}

function stopStopwatch() {
    stopwatchRunning = false;
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime % 3600) / 60);
    const seconds = stopwatchTime % 60;
    document.getElementById('stopwatch-display').textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
