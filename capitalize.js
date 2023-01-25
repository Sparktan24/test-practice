const capitalize = string => typeof (string) === 'string' ? string.charAt(0).toUpperCase() + string.slice(1) : 'Not a string';

module.exports = capitalize;
