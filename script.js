// Assignment code here

var passwordLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSpecial; 




// functions to get characters aka helpers 
let getLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let getUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let getNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let getSpecial = ['!', '@', '#', '$', '%', '^'];

var userChoice;

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
  }

  // variable to store window prompt answer
  var confirmUpperCase = window.confirm("Do you want to include uppercase letters in your password? Please click 'ok' for yes or click 'cancel' for 'no'.");

  if(confirmUpperCase) {
    console.log("wants upper case");
  } 
  // variable to store window prompt answer
  var confirmNumbers = window.confirm("Do you want to include numbers in your password? Please click 'ok' for yes or click 'cancel' for 'no'.");

  if(confirmNumbers) {
    console.log("wants numbers");
  } 

  // variable to store window prompt answer
  var confirmSpecial = window.confirm("Do you want to include special characters in your password? Please click 'ok' for yes or click 'cancel' for 'no'.");

  if(confirmSpecial === false && confirmNumbers === false && confirmLowerCase === false && confirmUpperCase === false) {
    alert("You need to choice at least one character choice.");
    return promptUser();
  } 

  return {
    // not giving key value pair 
    passwordLength,
    confirmLowerCase,
    confirmUpperCase,
    confirmNumbers,
    confirmSymbols
  }
}

// function getRandom 
// Math.floor(Math.random() * arr.length)

function generatePassword(promptResponse) {
  var password = "";
  // research: destructuring objects js
  var length = promptResponse.passwordLength;
  var lower = promptResponse.confirmLowerCase;
  var upper = promptResponse.confirmUpperCase;
  var number = promptResponse.confirmNumbers;
  var symbols = promptResponse.confirmSymbols;
  console.log('here'); 

  // pool of functions
  

  // creating random password 


  // logic 
 
  for(var i = 0; i < length; i++) {

  }


  


  return password;
}







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var promptResponse = promptUser(); 
  var password = generatePassword(promptResponse);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




