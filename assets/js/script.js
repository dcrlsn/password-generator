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
// Prompts for password length and adds the character sets that the user chooses. If the user makes an invalid selection (too short or no character sets) the function is reran.
function charConf() {
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
      charConf()
    }
  } else charConf()
}
// Randomly picks a letter from the selected array index.
function charRand(n) {
  char = charset[n].charAt(Math.random() * charset[n].length);
  return char;
}
// Selects array index based on the remainder of the current password (string length) and the character array length, if that matches the selected array (s), it uses that array, otherwise if falls back to the first array index for character selection. All these are added to the empty string until the iterations are complete. It also will increment and reset the selection before it can hit a value longer than the array length so there is always a valid selection for the charRand function. This guarantees at least one character will be used from each of the array indices.
function strRand() {
  var str = "";
  var s = 0;
  var c = charset.length;
  for (var i = 0; i < userLength; i++) {
    if (str.length % c === s) {
      str += charRand(s);
      if ((c - 1) > s) {
        s++;
      } else s = 0;
    } else str += charRand(0);
  } return str;
}
// Just runs the above functions
function generatePassword() {
  charConf();
  return strRand();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);