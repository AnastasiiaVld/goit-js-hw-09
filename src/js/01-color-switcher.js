const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onBtnClickStart() {
  timerId = setInterval(() => {
    bodyEl.style.background = getRandomHexColor();
  }, 1000);

  if (timerId) {
    startBtn.disabled = true;
  }
}

function onBtnClickStop() {
  clearInterval(timerId);
  if (timerId) {
    startBtn.disabled = false;
  }
}

startBtn.addEventListener('click', onBtnClickStart);
stopBtn.addEventListener('click', onBtnClickStop);
