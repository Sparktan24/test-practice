const capitalize = require('./capitalize');

describe('Capitalize String', () => {
  it('First letter upperCase', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('Is a string', () => {
    expect(capitalize(5)).toBe('Not a string');
  });
});
