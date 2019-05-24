const { sum, sub, div, mult } = require('../src/index.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('substract 5 - 2 to equal 3', () => {
  expect(sub(5, 2)).toBe(3);
});

test('divide 10 / 2 to equal 5', () => {
  expect(div(10, 2)).toBe(5);
});

test('multiply 5 * 2 to equal 10', () => {
  expect(mult(5, 2)).toBe(10);
});
