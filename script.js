let timer;
let isRunning = false;
let seconds = 0;
let milliseconds = 0;

const display = document.getElementById('display');
const millisDisplay = document.getElementById('millis');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    const ms = String(milliseconds).padStart(3, '0');
    display.textContent = `${hours}:${minutes}:${secs}`;
    millisDisplay.textContent = ms;
}

startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        startButton.textContent = "Stop"; 
        startButton.classList.add('button-animation'); 
        timer = setInterval(() => {
            milliseconds++; 
            if (milliseconds >= 1000) {
                seconds++;
                milliseconds = 0; 
            }
            updateDisplay();
        }, 1); 
    } else {
        clearInterval(timer);
        isRunning = false;
        startButton.textContent = "Start"; 
        startButton.classList.add('button-animation'); 
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    startButton.textContent = "Start"; 
    startButton.classList.remove('button-animation'); 
});

updateDisplay();