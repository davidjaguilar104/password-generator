// Assignment code here

var passwordLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumber;
var confirmSpecial; 



// functions to get characters aka helpers 
let getLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let getNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let getSpecial = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var converter = [];

var userChoice;

var toUpper = function(lower) {
  return lower.toUpperCase();
}

var getUpperCase = getLowerCase.map(toUpper);


var generateBtnEl = document.querySelector("#generate");

generateBtnEl.addEventListener("click", function() {
  ps = generatePassword();
  document.getElementById("password").placeholer = ps;
})

var allChoices = Math.floor(Math.random(getLowerCase.concat(getUpperCase).concat(getNumber).concat(getSpecial)));



function generatePassword() {
  // get user input 
  passwordLength = parseInt(prompt("How many characters do you want your password to include? Please pick a number between 8 and 128."));
  if(!passwordLength) {
    alert("You did not choose a valid option. Please enter a number between 8 and 128.");
    return generatePassword();
  } 
  else if(passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("You must choose a number between 8 and 128!"));
    return generatePassword();
  }
  else {
    confirmUpperCase = confirm("Do you want to include uppercase letters? Click 'ok' for yes and 'cancel' for no.");
    confirmLowerCase = confirm("Do you want to include lowercase letters? Click 'ok' for yes and 'cancel' for no.");
    confirmNumber = confirm("Do you want to include numbers? Click 'ok' for yes and 'cancel' for no.");
    confirmSpecial = confirm("Do you want to include special characters? Click 'ok' for yes and 'cancel' for no.");
  };

  // conditional checking for user selecting cancel on all prompts
  if(!confirmUpperCase && !confirmLowerCase && !confirmNumber && !confirmSpecial) {
    userChoice = alert("You must select at least one character type!");
    return generatePassword(); 
  }

  // conditional checking if user selects all four character types
  else if(confirmUpperCase && confirmLowerCase && confirmNumber && confirmSpecial) {
    userChoice = getSpecial.concat(getLowerCase, getNumber, getUpperCase);
  }

  // conditional checking if user selected three character types
  else if (confirmSpecial && confirmNumber && confirmUpperCase) {
    userChoice = getSpecial.concat(getNumber, getUpperCase);
  }
  else if (confirmSpecial && confirmNumber && confirmLowerCase) {
      userChoice = getSpecial.concat(getNumber, getLowerCase);
  }
  else if (confirmSpecial && confirmLowerCase && confirmUpperCase) {
      userChoice = getSpecial.concat(getLowerCase, getUpperCase);
  }
  else if (confirmNumber && confirmLowerCase && confirmUpperCase) {
      userChoice = getNumber.concat(getLowerCase, getUpperCase);
  }

  // conditional checking if user selected two character types 
  else if (confirmSpecial && confirmNumber) {
      userChoice = getSpecial.concat(getNumber);

  } else if (confirmSpecial && confirmLowerCase) {
      userChoice = getSpecial.concat(getLowerCase);

  } else if (confirmSpecial && confirmUpperCase) {
      userChoice = getSpecial.concat(getUpperCase);
  }
  else if (confirmLowerCase && confirmNumber) {
      userChoice = getLowerCase.concat(getNumber);

  } else if (confirmLowerCase && confirmUpperCase) {
      userChoice = getLowerCase.concat(getUpperCase);

  } else if (confirmNumber && confirmUpperCase) {
      userChoice = getNumber.concat(getUpperCase);
  }

  // conditional checking if the user only picked one character type
  else if (confirmSpecial) {
      userChoice = getSpecial;
  }
  else if (confirmNumber) {
      userChoice = getNumber;
  }
  else if (confirmLowerCase) {
      userChoice = getLowerCase;
  }
  // Created space variable to fill uppercase conversion
  else if (confirmUpperCase) {
      userChoice = converter.concat(getUpperCase);
  };


  var password = [];

  for(var i = 0; i < passwordLength; i++) {
    var criteriaSelected = userChoice[Math.floor(Math.random() * userChoice.length)];
    password.push(criteriaSelected);
  }

  var ps = password.join("");
  userInput(ps);
  return ps;

}


function userInput(ps) {
  document.getElementById("password").textContent = ps;
}





