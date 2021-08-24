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
var generateBtn = document.querySelector("#generate");
var possibleCharacters = ""
var characters = "qwertyuiopasdfghjklzxcvbnm"
var lowerConfirm = confirm("do you like puppies")
var upperConfirm = 
var specialConfirm =
var integersConfirm =
if(confirmThis == true){
  possibleCharacters += characters
}
// 
// possibleCharacters += characters.toUpperCase()
console.log(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)])
function generatePassword () {

  return "this is the string"
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
