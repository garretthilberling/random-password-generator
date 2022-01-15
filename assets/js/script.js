var passwordString = "";
var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacterArray = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  "<",
  ">",
  ",",
  ".",
  ":",
  ";",
  "`",
  "?",
];
var finalArray = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var promptPasswordLength = Number(
    window.prompt(
      "What is your desired password length? (pick between 8 and 128 characters)"
    )
  );

  // set password length
  if (
    promptPasswordLength === "" ||
    promptPasswordLength === null ||
    isNaN(promptPasswordLength) ||
    promptPasswordLength < 8 ||
    promptPasswordLength > 128
  ) {
    window.alert(
      "Please provide a valid numerical answer. Select number of characters between *8* and *128*. Please try again."
    );
    console.log("Please try again");
    return writePassword();
  } else {
    window.alert(
      "Your password length has been set to " +
        promptPasswordLength +
        " characters."
    );
    console.log("password is " + promptPasswordLength + " characters.");
  }

  // include lowercase?
  var promptLowerCase = window.confirm(
    "Include lower case? Select OK for 'yes' or Cancel for 'no.'"
  );
  if (promptLowerCase === true) {
    window.alert("Lower case letters will be included.");
  } else {
    window.alert("Lower case letters will be excluded.");
  }
  console.log(promptLowerCase); // OK = true, Cancel = false

  // include uppercase?
  var promptUpperCase = window.confirm(
    "Include upper case? Select OK for 'yes' or Cancel for 'no.'"
  );
  if (promptUpperCase === true) {
    window.alert("Upper case letters will be included.");
  } else {
    window.alert("Upper case letters will be excluded.");
  }
  console.log(promptUpperCase); // OK = true, Cancel = false

  // include numbers?
  var promptNumber = window.confirm(
    "Include numbers? Select OK for 'yes' or Cancel for 'no.'"
  );
  if (promptNumber === true) {
    window.alert("Numbers will be included.");
  } else {
    window.alert("Numbers will be excluded.");
  }
  console.log(promptNumber); // OK = true, Cancel = false

  // include special characters?
  var promptSpecialCharacter = window.confirm(
    "Include special characters? Select OK for 'yes' or Cancel for 'no.'"
  );
  if (promptSpecialCharacter === true) {
    window.alert("Special characters will be included.");
  } else {
    window.alert("Special characters will be excluded.");
  }
  console.log(promptNumber); // OK = true, Cancel = false

  var password = createPassword(
    promptPasswordLength,
    promptUpperCase,
    promptLowerCase,
    promptNumber,
    promptSpecialCharacter
  );
  console.log(password);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// The prompts are local so I passed them through the createPassword function which is located outside of this function.
function createPassword(
  promptPasswordLength,
  promptUpperCase,
  promptLowerCase,
  promptNumber,
  promptSpecialCharacter
) {
  var tempArray = [];
  var newPassword = "";
  for (var i = 0; i < promptPasswordLength; i++) {
    if (promptUpperCase) {
      var character =
        lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
      tempArray.push(character.toUpperCase());
    }
    if (promptLowerCase) {
      var character =
        lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
      tempArray.push(character);
    }
    if (promptNumber) {
      var character =
        numberArray[Math.floor(Math.random() * numberArray.length)];
      tempArray.push(character);
    }
    if (promptSpecialCharacter) {
      var character =
        specialCharacterArray[
          Math.floor(Math.random() * specialCharacterArray.length)
        ];
      tempArray.push(character);
    }
    newPassword += tempArray[Math.floor(Math.random() * tempArray.length)];
  }

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
