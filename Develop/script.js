// Assignment Code
// Array of special characters to be included in password
var specialCharacters = ['@','%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function getPasswordOptions(){
  var options = {
    length: 0,
    specialCharacters: false,
    lowerCase: false,
    upperCase: false,
    numbers: false
  };
  while(options.length < 8 || options.length > 128){
    options.length = parseInt(prompt("How many characters would you like your password to be?"));

    if (options.length < 8 || options.length > 128){
      alert ("Your password must be 8 - 128 characters long.")
    }
  } 
  //conditional statement to ensure user input 
  //Check password length 

  options.specialCharacters = confirm("Click OK if you would like to special characters in your password.");
  options.lowerCase = confirm("Would you like to include lowercase characters?");
  options.upperCase = confirm("What about uppercase?");
  options.numbers = confirm("How about numbers?");
    return options; 
}
//generate the password
function generatePassword(){
  var password = '';
  var options = getPasswordOptions();
    /*options= {
      length: n = 8 < 128;
      specialCharacters: true/false;
      lowerCase: true/false;
      upperCase: true/false;
      numbers: true/false; 
  }*/
  var passwordOptions = []; 
  if(options.specialCharacters){
    passwordOptions = passwordOptions.concat(specialCharacters);
  }
  if(options.lowerCase){
     passwordOptions = passwordOptions.concat(lowerCasedCharacters)
  }
  if(options.upperCase){
     passwordOptions = passwordOptions.concat(upperCasedCharacters)
  }
  if(options.numbers){
     passwordOptions = passwordOptions.concat(numericCharacters)
  }
  for(i=0; i<options.length; i++){
    password += passwordOptions[getRandomInt(passwordOptions.length)]
  }
  return password; 
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

