// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  var newStr = str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    })
    .join(" ");
  return newStr;
};