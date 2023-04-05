const formEl = document.querySelector('.form');

function createPromise(e, position, delay) {
  e.preventDefault();

  const delay = e.target.elements.delay.value;
  const stepValue = e.target.elements.step.value;
  const position = e.target.elements.amount.value;

  const shouldResolve = Math.random() > 0.3;

  const promise = Promise((resolve, reject) => {
    if (shouldResolve) {
      setTimeout(() => {
        resolve(position);
      }, delay);
    } else {
      reject;
    }
  });

  promise
    .then(value => {
      console.log('hello');
      return;
    })
    .catch(err => {
      console.log('bay');
    });
}

formEl.addEventListener('submit', createPromise);
