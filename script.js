
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

function generatePassword() {                                 // This is the function that generates the password randomly based on the sets of if/else statements, consoled throughout to ensure & check functionality 
  
  var getPassLength = prompt("Please enter the number of Password characters your like");   // The value of this var becomes how many times the application has to loop through all of the character options to randomly generate a password
  
  getPassLength = parseInt(getPassLength);                    // parseInt converts the prompt response from a string to an integer
  
  if (getPassLength > 6 && getPassLength < 128) {             // Password length has to be between 6 & 128 characters in order for function to execute 
    
    var addNumbers = confirm("Would you like numbers in your password?");     // Confirm has boolean values so the if/else statement is derived from one of those 2 choices
    
    if (addNumbers) {                                         // "If user pushes 'ok' to the confirm question..."
      availablePasswordOptions = availablePasswordOptions.concat(numbersString);      // Then, the string containing number values is concatenated to the array of possible characters 
      console.log(availablePasswordOptions);
    }
    
    var addSpecialChars = confirm("Would you like Special Characters in your password?");
    
    if (addSpecialChars) {
      availablePasswordOptions = availablePasswordOptions.concat(specialString);      // If user selects "ok" to the special characters confirm question, the specialString is concatenated into the array of possible character options for the password
      console.log(availablePasswordOptions);
    }
    
    var addLowerCase = confirm("Would you like Lowercase characters in your password?");
    
    if (addLowerCase) {
      availablePasswordOptions = availablePasswordOptions.concat(lowerString);        // Same as above 2 if statements, just for the lowercase characters string 
      console.log(availablePasswordOptions);
    }
    
    var addUpperCase = confirm("Would you like Uppercase characters in your password?");
    
    if (addUpperCase) {
      availablePasswordOptions = availablePasswordOptions.concat(upperString);        // Same as above 3 if statements 
      console.log(availablePasswordOptions);
    }
    
    console.log("The available password options are:");                               // This lets developer know which options the user confirmed for their password 
    console.log(availablePasswordOptions);
    
    var userPassword = "";                                                            // userPassword value is an empty string b/c the for loop will generate the value as the iterations run through the for loop
    
    for (var i = 0; i < getPassLength; i++) {                                         // getPassLength is the first prompt displayed once user clicks the submit button - the value of this variable is passed from line 24
      var rand = Math.floor(Math.random() * availablePasswordOptions.length);         // for each random value, every index from the available options array is used to randomly calculate index values that are then converted into their string values to randomly generate a password   
      userPassword += availablePasswordOptions[rand];                                 // The userPassword value increases by 1 index each iteration based on the availablePasswordOptions w/ the rand function 
      console.log(userPassword);
    }                                                                                 // The for loop will add 1 randomly generated character to the userPassword until the user's chosen password length is reached 
    
    console.log(userPassword);                                                        // Displays randomly generated password to the developer in the console 
    passwordText.textContent = userPassword;                                          // passwordText is the mutable variable called from the HTML text-area element, its textContent is rendered to display the function's output on the web browser
  } 
  else {                                                                              // If the user's input does not fit the conditions in the initial prompt, this else statement block is executed instead 
    alert("Must be between 6 and 128");
    passwordText.textContent = "";                                                    // The password generator remains empty if the else statement executes - nothing is executed b/c conditions are unmet 
  }
};
