// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

  // Creating Variables

  var userOptions = ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
  var userPassword = "";
  var userDisplayed = "";
  
  //Creating prompt for characters

  var charLenght = prompt("How many characters would you like? Pick between 8-128?");

  // Set the minimun and maximum amount of charcters

  

}