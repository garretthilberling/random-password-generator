// Assignment code here
var passwordLength;
var passwordString = "";
// var passwordCharacters

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var promptPasswordLength = Number(window.prompt('What is your desired password length? (pick between 8 and 128 characters)'));

  var passwordCharacters
  // validate prompt answer
  if (promptPasswordLength === "" || promptPasswordLength === null || isNaN(promptPasswordLength) || promptPasswordLength < 8 || promptPasswordLength > 128) {
    window.alert("Please provide a valid numerical answer. Select number of characters between *8* and *128*. Please try again.");
    console.log("Please try again");
    return writePassword();
  } 
  else {
    window.alert("Your password length has been set to " + promptPasswordLength + " characters.");
    console.log("password is " + promptPasswordLength + " characters.");
  }

  var promptLowerCase = window.confirm("Include lower case? Select OK for 'yes' or Cancel for 'no.'");
  if (promptLowerCase === true) {
    window.alert("Lower case letters will be included.");
    passwordCharacters = passwordCharacters + "abcdefghijklmnopqrstuvwxyz";
  } else {
    window.alert("Lower case letters will be excluded.");
  } console.log(promptLowerCase); // OK = true, Cancel = false

  var promptUpperCase = window.confirm("Include upper case? Select OK for 'yes' or Cancel for 'no.'");
  if (promptUpperCase === true) {
    window.alert("Upper case letters will be included.");
    passwordCharacters = passwordCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    window.alert("Upper case letters will be excluded.");
  } console.log(promptUpperCase); // OK = true, Cancel = false

  var promptNumber = window.confirm("Include numbers? Select OK for 'yes' or Cancel for 'no.'");
  if (promptNumber === true) {
    window.alert("Numbers will be included.");
    passwordCharacters = passwordCharacters + "0123456789";
  } else {
    window.alert("Numbers will be excluded.");
  } console.log(promptNumber); // OK = true, Cancel = false

  var promptSpecialCharacter = window.confirm("Include special characters? Select OK for 'yes' or Cancel for 'no.'");
  if (promptSpecialCharacter === true) {
    window.alert("Special characters will be included.");
    passwordCharacters = passwordCharacters + "~!@#$%^&**()_+{}:?<>`";
  } else {
    window.alert("Special characters will be excluded.");
  } console.log(promptSpecialCharacter); // OK = true, Cancel = false
  
  var passwordGenerated = passwordCharacters.charAt(Math.floor(Math.random() * promptPasswordLength));

  var generatePassword = function(promptPasswordLength, passwordCharacters) {
    let passwordString = "";

    window.alert("Your password is: " + passwordGenerated);

    // window.alert(Math.random(passwordCharacters).toString(36).slice(-promptPasswordLength));
    return passwordString;
  }

  generatePassword();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
