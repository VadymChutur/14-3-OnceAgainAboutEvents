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
