import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let selected;
let timeComponents;
let timer = null;
let deltaTime;
const startButton = document.querySelector('button');
startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      selected = selectedDates[0];
      startButton.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function timerStart() {
  timer = setInterval(() => {
    deltaTime = selected.getTime() - Date.now();

    if (deltaTime <= 0) {
      clearInterval(timer);
      return;
    }

    timeComponents = convertMs(deltaTime);

    document.querySelector('[data-days]').textContent = addLeadingZero(
      timeComponents.days
    );
    document.querySelector('[data-hours]').textContent = addLeadingZero(
      timeComponents.hours
    );
    document.querySelector('[data-minutes]').textContent = addLeadingZero(
      timeComponents.minutes
    );
    document.querySelector('[data-seconds]').textContent = addLeadingZero(
      timeComponents.seconds
    );
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startButton.addEventListener('click', timerStart);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
