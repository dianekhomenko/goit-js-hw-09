const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body')

const startTimer = event => {
      const timerColor = setInterval(() => {
          console.log('event');
          body.style.backgroundColor = getRandomHexColor();
          document.querySelector('[data-start]').disabled = true;
      }, 1000);
};

const stopTimer = event => {
    clearInterval(timerColor);
    document.querySelector('[data-start]').disabled = false;
}

startButton.addEventListener('click', startTimer)
stopButton.addEventListener('click', stopTimer);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}