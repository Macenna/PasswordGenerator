
console.log("App connecting");
var submitBtn = document.getElementById("subBtn");            // Calling the element ID for the "generate password" button as the value of this variable in order to manipulate it in the DOM
var passwordText = document.getElementById("password");       // Calling the element ID of the text area so the password var can later be placed in that element 

submitBtn.addEventListener("click", function (event) {        // Clicking the submit button is an event that calls the function to begin generating a password 
  event.preventDefault();                                     // This prevents the submit button from actually submitting a form (the default event for a submit button) in order to generate a password instead 
  generatePassword();                                         // generatePassword function is declared as the event that is listened for when submit button is clicked 
});

var numbersString = "1234567890".split("");                   // These variables contain strings w/ all the possible characters to randomly call to generate a password
var specialString = "!@#$%^&*()".split("");                     // .split("") -> separates every character in the string to differentiate each character type for each character category 
var lowerString = "abcdefghijklmnopqrstuvwxyz".split("");
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var availablePasswordOptions = [];                            // This empty array is where the randomly generated characters will be stored until the functions are finished running (character limit set by user is reached)

console.log(numbersString);                                   // The console displays every character as an individual index w/in an array - a different array for each variable 
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
