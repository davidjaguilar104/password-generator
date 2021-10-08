// Assignment code here

var passwordLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumber;
var confirmSpecial; 



// functions to get characters aka helpers 
let getLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let getNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let getSpecial = ['!', '@', '#', '$', '%', '^'];

var converter = [];

var userChoice;

var toUpper = function(lower) {
  return lower.toUpperCase();
}

var getUpperCase = getLowerCase.map(toUpper);


var allChoices = Math.floor(Math.random(getLowerCase.concat(getUpperCase).concat(getNumber).concat(getSpecial)));



function generatePassword() {
  // get user input 
  passwordLength = parseInt(prompt("How many characters do you want your password to include? Please pick a number between 8 and 128."));
  if(!passwordLength) {
    alert("You did not choose a valid option. Please enter a number between 8 and 128.");
  } else if(passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("You must choose a number between 8 and 128!"));
  }
}







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




