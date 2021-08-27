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
const generateBtn = document.querySelector("#generate");
let possibleCharacters = ""
const lowerCharacters = "qwertyuiopasdfghjklzxcvbnm"
const upperCharacters = "ASDFGHJKLQWERTYUIOPZXCVBNM"
const specialCharacters = "!@#$%^&*"
const integers = "1234567890"
const lowerConfirm = confirm("Would you like to use lower case letters in your password?")
const upperConfirm = confirm("Would you like to use upper case letters in your password?")
const specialConfirm = confirm("Would you like to use symbols in your password?")
const integersConfirm = confirm("Would you like to use numbers in your password?")


if(lowerConfirm == true){
  possibleCharacters += lowerCharacters 
}
if(upperConfirm == true) {
possibleCharacters += upperCharacters
}
  
if(specialConfirm == true) {
  possibleCharacters += specialCharacters
}
if(integersConfirm == true) {
  possibleCharacters += integers
}
// 
// possibleCharacters += lowerCharacters, upperCharacters, specialCharacters, integers()
//console.log(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)])
//const generatePassword = (length, possibleCharacters)
  //let password = "";
  //for(let i = 0, i < length; i++) {
    //password += characters.charAt(
      //Math.floor(Math.random() * characters.length)
    //);
  //}


function generatePassword () {

  return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
