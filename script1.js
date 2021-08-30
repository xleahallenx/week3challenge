// Assignment Code
const generateBtn = document.querySelector("#generate");
const generatePassword = document.querySelector("#textArea");

function generatePassword() {
    
}


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


const lowerConfirm = confirm("Would you like to use lower case letters in your password?")
const upperConfirm = confirm("Would you like to use upper case letters in your password?")
const specialConfirm = confirm("Would you like to use symbols in your password?")
const integersConfirm = confirm("Would you like to use numbers in your password?")
const characterAmount = window.prompt("Enter number of characters you'd like in your password between 8 - 120.")

let myFunctionsArray = [];
if(lowerConfirm) {
    myFunctionsArray.push(getLowerCaseCharacter);
}
if(upperConfirm) {
    myFunctionsArray.push(getUpperCaseCharacter);
}
if(specialConfirm) {
    myFunctionsArray.push(getSpecialCharacters);
}
if(integersConfirm) {
    myFunctionsArray.push(getIntegers);
}


function getRandomNumber(max){
    const tmp = Math.random()* max;
    const tmpl = Math.floor(tmp);
    return tmpl;
  }
  
  function getLowerCaseCharacter() {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const tmp = getRandomNumber(arr.length);
    return arr[tmp]
}

function getUpperCaseCharacter() {
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const tmp = getRandomNumber(arr.length);
    return arr[tmp]
}

function getSpecialCharacters() {
    const arr = ['!', '@', '#', '$', '%', '^', '&', '*'];
    const tmp = getRandomNumber(arr.length);
    return arr[tmp]
}

function getIntegers() {
    const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const tmp = getRandomNumber(arr.length);
    return arr[tmp]
}

function getPasswordCharacter() {
    const tmp = getRandomNumber(myFunctionsArray.length);
    return myFunctionsArray[tmp]();
}

let finalPassword = '';
for(let i= 0; i < characterAmount; i++) {
    const char = getPasswordCharacter();
finalPassword = finalPassword+char;
}
window.alert(finalPassword)

generateBtn.addEventListener("click", generatePassword);