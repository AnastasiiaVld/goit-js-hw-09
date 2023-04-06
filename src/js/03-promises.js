import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const formDelay = document.querySelector('[name="delay"]');
const formStep = document.querySelector('[name="step"]');
const formAmount = document.querySelector('[name="amount"]');

let amount = 0;
let step = 0;
let firstStep = 0;

function onsubmitBtn(e) {
  e.preventDefault();

  firstStep = +formDelay.value;
  step = +formStep.value;
  amount = +formAmount.value;

  for (let i = 0; i < amount; i++) {
    delayNew = step * i + firstStep;
    createPromise(i + 1, delayNew)
      .then(data => Notiflix.Notify.success(data))
      .catch(error => Notiflix.Notify.failure(error));
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, step);
  });
}

formEl.addEventListener('submit', onsubmitBtn);
