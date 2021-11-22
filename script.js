var userLength = 0;
var charset = [];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  userLength = 0;
  charset = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function charsetConfirms() {
  userLength = Number(prompt("How long would you like your password to be? Please choose a number between 8 and 128."));
  if (userLength >= 8 && userLength <= 128) {
    var hasLowercase = confirm("Would you like to use lowercase letters?")
    var hasUppercase = confirm("Would you like to use capital letters?")
    var hasNumbers = confirm("Would you like to use numbers?")
    var hasSymbols = confirm("Would you like to use symbols?")
    if (hasLowercase) charset.push("abcdefghijklmnopqrstuvwxyz");
    if (hasUppercase) charset.push("ABCDEFGHIIJKLMNOPQRSTUVWXYZ");
    if (hasNumbers) charset.push("1234567890");
    if (hasSymbols) charset.push("!@#$%^&*()_+=-")
    while (!hasLowercase && !hasUppercase && !hasNumbers && !hasSymbols) {
      alert("You must choose at least one character set");
      charsetConfirms()
    }
  } else charsetConfirms()
}
function charRandomizer(n) {
  character = charset[n].charAt(Math.random() * charset[n].length);
  return character;
}


function strRandomizer() {
  var str = "";
  var selection = 0;
  for (var i = 0; i < userLength; i++) {
    if (str.length % charset.length === selection) {
      str += charRandomizer(selection);
      if ((charset.length - 1) > selection) {
        selection++;
      } else selection = 0;
    } else str += charRandomizer(0);
  } return str;
}

function generatePassword() {
  charsetConfirms();
  return strRandomizer();
}
