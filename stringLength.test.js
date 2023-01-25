const stringLength = require('./stringLength');

it('Number of letters of "hello" = 5', () => {
  expect(stringLength('hello')).toBe(5);
});

it('String lenght is < 1', () => {
  expect(stringLength('')).toBe('Error word length < 1 or > 10');
});

it('String lenght is > 10', () => {
  expect(stringLength('hololololo1')).toBe('Error word length < 1 or > 10');
});
