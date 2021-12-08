const stringLength = (string) => {
  return string.length;
}

// reverse string function
const reverseString = (string) => {
  return string.split('').reverse().join('');
}

// Capitalize first letter of string
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


module.exports = {stringLength, reverseString, capitalizeFirstLetter};
