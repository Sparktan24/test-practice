//  const reverseString = string => string.split('').reverse().join('');
const reverseString = string => [...string].reverse().join('');

module.exports = reverseString;
