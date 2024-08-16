function f(argument) {
  const div = document.querySelector(`#${argument}`);
  div.innerHTML += ' Hello';
}

f('one');
f('two');

function sum(a, b = 1) {
  return a * b;
}

console.log(sum(7));

const oneEl = document.querySelector('#bonus-one');
console.log(oneEl);

function myClick() {
  console.log('click');
  const twoEl = document.querySelector('#bonus-two');
  twoEl.addEventListener('click', myClick2);
}

function myClick2() {
  console.log(2222);
  const twoEl = document.querySelector('#bonus-two');
}

function myClick3() {
  console.log(3333);
}

oneEl.addEventListener('click', myClick, { once: true });
