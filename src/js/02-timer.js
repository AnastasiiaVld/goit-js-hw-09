import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtnEl = document.querySelector('[data-start]');
const dataDaysEl = document.querySelector('[data-days]');
const dataHoursEl = document.querySelector('[data-hours]');
const dataMinutesEl = document.querySelector('[data-minutes]');
const dataSecondsEl = document.querySelector('[data-seconds]');

let pickDate = 0;
let timer = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),

  minuteIncrement: 1,

  onClose(selectedDates) {
    pickDate = selectedDates[0];

    if (pickDate <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtnEl.disabled = true;
    } else {
      startBtnEl.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function onCreateTimer() {
  timer = setInterval(() => {
    startBtnEl.disabled = true;

    const tempTime = pickDate;
    const deadline = new Date();
    const deff = tempTime - deadline;

    const { days, hours, minutes, seconds } = convertMs(deff);

    dataDaysEl.textContent = addLeadingZero(days);
    dataHoursEl.textContent = addLeadingZero(hours);
    dataMinutesEl.textContent = addLeadingZero(minutes);
    dataSecondsEl.textContent = addLeadingZero(seconds);

    if (deff <= 1000) {
      clearInterval(timer);
      startBtnEl.disabled = false;
      return;
    }

    console.log(convertMs(deff));
  }, 1000);
}

startBtnEl.addEventListener('click', onCreateTimer);
