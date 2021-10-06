// Assignment code here



// functions to get characters
function getLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSpecial() {
  const symbols = '!@#$%^&*()_+';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


// function with all the prompts for the password criteria
function promptUser() {
  // variable to store window prompt answer
  var passwordLength = window.prompt("Pick a password length between 8 and 128 characters. Please enter a number between 8 and 128.")
  console.log("password will be " + passwordLength + " characters long");

  if(passwordLength > 128 || passwordLength < 8) {
    window.alert("You did not enter a number between 8 and 128. Please try again."); 
    return promptUser(); 
  }

  // variable to store window prompt answer
  var confirmLowerCase = window.confirm("Do you want to include lowercase letters in your password? Please click 'ok' for yes or click 'cancel' for 'no'.");

  if(confirmLowerCase) {
    console.log("wants lower case");
  } else {
    console.log("does not want lower case");
  }

  // variable to store window prompt answer
  var confirmUpperCase = window.confirm("Do you want to include uppercase letters in your password? Please click 'ok' for yes or click 'cancel' for 'no'.");

  if(confirmUpperCase) {
    console.log("wants upper case");
  } else {
    console.log("does not want upper case");
  }

  // variable to store window prompt answer
  var confirmNumbers = window.confirm("Do you want to include numbers in your password? Please click 'ok' for yes or click 'cancel' for 'no'.");

  if(confirmNumbers) {
    console.log("wants numbers");
  } else {
    console.log("does not want numbers");
  }

  // variable to store window prompt answer
  var confirmSymbols = window.confirm("Do you want to include special characters in your password? Please click 'ok' for yes or click 'cancel' for 'no'.");

  if(confirmSymbols) {
    console.log("wants symbols");
  } else {
    console.log("does not want symbols");
  }
}


function generatePassword() {
  return 'a23jujf0cj2w3-q!@#';
}







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  promptUser(); 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




