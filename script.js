var userLength = 0;
var charset = [];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  userLength = 0;
  selection = 0;
  charset = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function charsetConfirms() {
  userLength = Number(prompt("How long would you like your password to be? Please choose a number between 8 and 128."));
  if (isNaN(userLength) || userLength < 8 || userLength > 128) userLength = Number(prompt("Please choose a number between 8 and 128"));
  var hasLowercase = confirm("Would you like to use lowercase letters?")
  var hasCapitals = confirm("Would you like to use capital letters?")
  var hasNumbers = confirm("Would you like to use numbers?")
  var hasSymbols = confirm("Would you like to use symbols?")
  if (hasLowercase) charset.push("abcdefghijklmnopqrstuvwxyz");
  if (hasCapitals) charset.push("ABCDEFGHIIJKLMNOPQRSTUVWXYZ");
  if (hasNumbers) charset.push("1234567890");
  if (hasSymbols) charset.push("!@#$%^&*()_+=-")
  while (!hasLowercase && !hasCapitals && !hasNumbers && !hasSymbols) {
    alert("You must choose at least one character set");
    charsetConfirms()
  }
}

function working() {
  var selection = 0
  var str = ""
  for (var l = 0; l < userLength; l++)
    if (charset.length === 1) {
      str += charRandomizer(0)
    } else if (charset.length === 2) {
      if (str.length % 2 === 0) str += charRandomizer(0);
      else str += charRandomizer(1);
    } else
      if (str.length % (charset.length) === 0) {
        str += charRandomizer(selection)
        if (selection < (charset.length)) selection++;
        else selection = 0;
      } else if (str.length % (charset.length) === 1) {
        str += charRandomizer(selection)
        if (selection < (charset.length)) selection++;
        else selection = 0;
      } else if (str.length % charset.length === 2) {
        str += charRandomizer(selection)
        if (selection === (charset.length)) selection++;
        else selection = 0;
      } else {
        str += charRandomizer(selection)
        if (selection < (charset.length)) selection++;
        else selection = 0;
      } return str;
  function charRandomizer(n) {
    character = charset[n].charAt(Math.random() * charset[n].length);
    return character;
  }
}

function generatePassword() {
  charsetConfirms();
  return working();
}
