// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//

console.log("App connecting");
var submitBtn = document.getElementById("subBtn");
var passwordText = document.getElementById("password");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  generatePassword();
});

var numbersString = "1234567890".split("");
var specialString = "!@#$%^&*()".split("");
var lowerString = "abcdefghijklmnopqrstuvwxyz".split("");
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var availablePasswordOptions = [];

console.log(numbersString);
console.log(specialString);
console.log(lowerString);
console.log(upperString);

function generatePassword() {
  var getPassLength = prompt(
    "Please enter the number of Password characters your like"
  );
  getPassLength = parseInt(getPassLength);
  if (getPassLength > 6 && getPassLength < 128) {
    var addNumbers = confirm("Would you like numbers in your password?");
    if (addNumbers) {
      availablePasswordOptions = availablePasswordOptions.concat(numbersString);
      console.log(availablePasswordOptions);
    }
    var addSpecialChars = confirm(
      "Would you like Special Characters in your password?"
    );
    if (addSpecialChars) {
      availablePasswordOptions = availablePasswordOptions.concat(specialString);
      console.log(availablePasswordOptions);
    }
    var addLowerCase = confirm(
      "Would you like Lowercase characters in your password?"
    );
    if (addLowerCase) {
      availablePasswordOptions = availablePasswordOptions.concat(lowerString);
      console.log(availablePasswordOptions);
    }
    var addUpperCase = confirm(
      "Would you like Uppercase characters in your password?"
    );
    if (addUpperCase) {
      availablePasswordOptions = availablePasswordOptions.concat(upperString);
      console.log(availablePasswordOptions);
    }
    console.log("The available password options are:");
    console.log(availablePasswordOptions);
    var userPassword = "";
    for (var i = 0; i < getPassLength; i++) {
      var rand = Math.floor(Math.random() * availablePasswordOptions.length);
      userPassword += availablePasswordOptions[rand];
      console.log(userPassword);
    }
    console.log(userPassword);
    passwordText.textContent = userPassword;
  } else {
    alert("Must be between 6 and 128");
    passwordText.textContent = "";
  }
}
