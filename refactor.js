const GENERATE_BTN = document.getElementById("generate");
const TEXTAREA = document.getElementById("password");

const characterChoices = {
  lower: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  upper: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  special: ["!", "#", "$", "%", "&", "'", "(", ")", "/"],
};

function startPasswordPrompt() {
  const length = getPasswordLength();
  const lower = getCharacterType("lowercase");
  const upper = getCharacterType("uppercase");
  const number = getCharacterType("numbers");
  const special = getCharacterType("special");
  
  const criteriaSelected = getCriteriaSelected({
    lower,
    upper,
    number,
    special,
  });
  
  validateAtLeastOneCriteria(criteriaSelected);
  
  createPassword(length, criteriaSelected);
}

function getCriteriaSelected(criteriaObj) {
  const criteriaSelected = [];
  for (const key in criteriaObj) {
    if (criteriaObj[key]) {
      criteriaSelected.push(key);
    }
  }
  return criteriaSelected;
}

function createPassword(length, criteriaSelected) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password = password.concat(getRandomCharacter(criteriaSelected));
  }
  
  writePassword(password);
}

function validateAtLeastOneCriteria(criteriaSelected) {
  if (criteriaSelected.length === 0) {
    return startPasswordPrompt();
  }
}

function writePassword(password) {
  TEXTAREA.textContent = password;
}

function getRandomCharacter(criteriaSelected) {
  const criteriaType =
  criteriaSelected[Math.floor(Math.random() * criteriaSelected.length)];
  const length = characterChoices[criteriaType].length;
  return characterChoices[criteriaType][Math.floor(Math.random() * length)];
}

function getCharacterType(characterType) {
  return confirm(
    `do you want to include ${characterType}, click ok for yes and cancel for no`
    );
  }
  
  function getPasswordLength() {
    return parseInt(
      prompt("choose a password length between 8 and 128 characters")
      );
    }
    
    GENERATE_BTN.addEventListener("click", () => {
      startPasswordPrompt();
    });
    