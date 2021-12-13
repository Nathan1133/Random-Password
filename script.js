// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// Variables 
var passwordCharacters = "";
var lowerCase;
var upperCase;
var number;
var specialCharacter;

// Arrays
var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arraySpecial= ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Prompt for user to select the amount of desired characters

function generatePassword() {

  passwordCharacters = prompt("How many Characters between 8 and 128 would you like your password?");
  console.log("passwordCharacters" + passwordCharacters);

  if (passwordCharacters >= 8 || passwordCharacters <= 128) {
    console.log("Number of Characters " + passwordCharacters);


  } 
  if (passwordCharacters < 8 || passwordCharacters > 128) {
    window.alert ("You need to chose a valid option. Try again!");
    return generatePassword();
  };

  // Password Content
  lowerCase = confirm("Include lower case character?")
  console.log("Lower Case " + lowerCase);

  upperCase = confirm("Inlcude upper case characters?")
  console.log("Upper Case " + upperCase);

  number = confirm("Include numbers?")
  console.log("Numbers " + number);

  specialCharacter = confirm("Include special characters?")
  console.log("Special Characters " + specialCharacter);




  // Used Concat to join arrays
  var passwordContent = []

  if (lowerCase) {
    passwordContent = passwordContent.concat(arrayLower)
  }

  if (upperCase) {
    passwordContent = passwordContent.concat(arrayUpper)
  }

  if (number) {
    passwordContent = passwordContent.concat(arrayNumbers)

  }

  if (specialCharacter) {
    passwordContent = passwordContent.concat(arraySpecial)
  }

  console.log(passwordContent);


    // Empty string variable with a for loop to generate random characters for array
    var random = "";

      for (var i = 0; i < passwordCharacters; i++) {
        random = random + passwordContent[Math.floor(Math.random() * passwordContent.length)];
        console.log(random)
      }

      return random;
    }
      

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  
  passwordText.value = password;

} 
  