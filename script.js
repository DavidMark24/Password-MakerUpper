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

function generatePassword() {
  // Creating Variables

  var userOptions = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  ];
  var userPassword = "";
  var userDisplayed = "";

  //Creating prompt for characters

  var charLength = prompt(
    "How many characters would you like? Pick between 8-128."
  );

  // Set the minimun and maximum amount of charcters

  if (charLength < 8 || charLength > 128) {
    for (
      charLength;
      charLength < 8 || charLength > 128;
      charLength = prompt(
        "Your password must be a number from 8 to 128.")
      
    ); 
      }


// Confirm each characters in use

var lowercase = confirm("Do you want to inlcude lowercase letters?");
var upperscase = confirm("Do you want to inlcude uppercase letters?");
var numbers = confirm("Do you want to inlcude numbers?");
var specials = confirm("Do you want to inlcude special characters?");

var userChoices = [lowercase, upperscase, numbers, specials];

// Created loop to include whether or not to include same index within the password

for (var i = 0; i < userChoices.length; i++) {
  if (userChoices[i]) {
    userPassword = userPassword + userOptions[i]
  }
}



}



