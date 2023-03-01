const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerColor = null;

function startTimer(event) {
  document.querySelector('[data-start]').disabled = true;
  timerColor = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopTimer(event) {
  clearInterval(timerColor);
  document.querySelector('[data-start]').disabled = false;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
