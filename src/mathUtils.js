function add(a, b) {
  return a + b
}

function multiply(a, b) {
  console.debug('テスト');
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

module.exports = { add, multiply, divide, factorial };
