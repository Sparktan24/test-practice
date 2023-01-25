module.exports = class Calculator {
  add = (a, b) => a + b;
  substract = (a, b) => a - b;
  divide = (a, b) => b === 0 ? 'Error division by 0' : a / b;
  multiply = (a, b) => a * b;
}
