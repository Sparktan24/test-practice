const stringLength = string => {
  return ((string.length >= 1 && string.length <= 10) ? string.length : 'Error word length < 1 or > 10');
}

module.exports = stringLength;
