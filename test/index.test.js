const { sum, substract, divide, multiply } = require('../src/index.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('substract 5 - 2 to equal 3', () => {
  expect(substract(5, 2)).toBe(3);
});

test('divide 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('multiply 5 * 2 to equal 10', () => {
  expect(multiply(5, 2)).toBe(10);
});


test('test stdout', () => {
  const message = "Hello world";
  print(stream, message)
  expect(stream.get()).toBe("Hello world");
});
