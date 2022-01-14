// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var promptPasswordLength = window.prompt('What is your desired password length? (pick between 8 and 128 characters)');

  // validate prompt answer
  if (promptPasswordLength === "" || promptPasswordLength === null) {
    window.alert("Please provide a valid answer. Select number of characters between *8* and *128*. Please try again.");
    return writePassword();
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
