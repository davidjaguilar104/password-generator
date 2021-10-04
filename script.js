// Assignment code here




const charFunctions = {
  lower: getLowerCase(),
  upper: getUpperCase(),
  number: getNumber(),
  symbol: getSymbol()
}

function getLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbol() {
  const symbols = '!@#$%^&*()_+';
  return symbols[Math.floor(Math.random() * symbols.length)];
}



function promptUser() {
  // variables to store window prompt answers
  var passwordLength = window.prompt("Pick a password length between 8 and 128 characters")
  var wantsLowerCase = window.prompt("Do you want to inclue lowercase letters in your password?");
  var wantsUpperCase = window.prompt("Do you want to inclue uppercase letters in your password?");
  var wantsNumbers = window.prompt("Do you want to inclue numbers in your password?");
  var wantsSymbols = window.prompt("Do you want to inclue symbols in your password?");
}


function generatePassword() {
  console.log("this is a placeholder to avoid console errors"); 
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




