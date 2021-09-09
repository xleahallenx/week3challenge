// Assignment code here

// User clicks button
  // add an event listener to button
// asked for password specifications
  // asked for a password length
  // asked for upper, lower, special, integers 
    // have an array for possible password characters
    // got through array randomly to select character (for loop)
    // return a random string
// see the password
  // set textArea value to be random password

// Get references to the #generate element
//const generateBtn = document.querySelector("#generate");
//generateBtn.addEventListener("click", writePassword);


let possibleCharacters = ""
const lowerCharacters = "qwertyuiopasdfghjklzxcvbnm"
const upperCharacters = "ASDFGHJKLQWERTYUIOPZXCVBNM"
const specialCharacters = "!@#$%^&*"
const integers = "1234567890"
const lowerConfirm = confirm("Would you like to use lower case letters in your password?")
const upperConfirm = confirm("Would you like to use upper case letters in your password?")
const specialConfirm = confirm("Would you like to use symbols in your password?")
const integersConfirm = confirm("Would you like to use numbers in your password?")
const characterAmount = window.prompt("How many characters would you like in your password?")

const myTextArea = document.querySelector("#textarea");
const resultEl = document.querySelector('#result');
//const generateEl = document.querySelector('#generate');
const generateBtn = document.querySelector("#generate");


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  special: getRandomSpecial,
  integer: getRandomInteger
};


generateBtn.addEventListener("click", () => {
  const numberofCharacters = +characterAmount.valueOf;
  const hasLower = lowerConfirm.true;
  const hasUpper = upperConfirm.true;
  const hasSpecial = specialConfirm.true;
  const hasInteger = integers.true;

 

  resultEl.textContent = generatedPassword(
    hasLower, 
    hasUpper, 
    hasInteger, 
    hasSpecial, 
    numberofCharacters);


});

function generatedPassword(lower, upper, integer, special, numberofCharacters) {

  let generatedPassword = '';
  const typesCount = lower + upper + special + integer;

  for(let i = 0; i < length; i += typesCount) {
    const funcName = Object.keys(type) [0];

    generatedPassword =+ randomFunc[funcName] ();
  };

const finalPassword = generatedPassword.slice(0,characterAmount); 

return finalPassword;

}

//functions

function getRandomLower() {
  return String.lowerCharacters(Math.floor(Math.random()));
  if(lowerConfirm === true){
  possibleCharacters += lowerCharacters 
}
};

function getRandomUpper() {
  return String.upperCharacters(Math.floor(Math.random()));
  if(upperConfirm === true) {
    possibleCharacters += upperCharacters
}
};

function getRandomSpecial() {
  return String.specialCharacters(Math.floor(Math.random()));
  if(specialConfirm === true) {
  possibleCharacters += specialCharacters
}
};

function getRandomInteger() {
  return String.integer(Math.floor(Math.random()));
  if(integersConfirm === true) {
  possibleCharacters += integers
}
};

//if(lowerConfirm == true){
  //possibleCharacters += lowerCharacters 
//}
//if(upperConfirm == true) {
//possibleCharacters += upperCharacters
//}
  
//if(specialConfirm == true) {
  //possibleCharacters += specialCharacters
//}
//if(integersConfirm == true) {
  //possibleCharacters += integers
//}

//function generatePassword() {
//const password = generatePassword();
//const passwordText = document.querySelector("#password");

//passwordText.value = password;


//$: password = generatePassword (
  //characterAmount,
  //lowerCharacters,
  //upperCharacters,
  //specialCharacters,
  //integers
//);
// possibleCharacters += lowerCharacters, upperCharacters, specialCharacters, integers()
//console.log(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)])
//const generatePassword = (length, possibleCharacters)
  //let password = "";
  //for(let i = 0, i < length; i++) {
    //password += characters.charAt(
      //Math.floor(Math.random() * characters.length)
    //);
  //}


//function generatePassword () {

  //console.log(password);
  //return password;
//}


// Write password to the #password input


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
