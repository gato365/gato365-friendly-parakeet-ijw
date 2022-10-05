// Assignment code here



// Comment: Empty password
var finalPassword = [];

//  Comment: User provides length of password
var passwordLength = prompt("What is the length of your password?","GeeksforGeeks");
// Issue 1: Error Check to make sure user provides a number

// a) uppercase array - Found code to create uppercase alphabet - https://plainenglish.io/blog/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const upper = alpha.map((x) => String.fromCharCode(x));


// b) lowercase array - Found method to change upper into lower
//https://bobbyhadz.com/blog/javascript-convert-all-elements-of-array-to-lowercase#:~:text=To%20convert%20all%20array%20elements,array%20containing%20only%20lowercase%20strings.
const lower = upper.map(element => {
  return element.toLowerCase();
});

// c) Special Characters created array from scracth
//Issue 2: Get complete array of special character
const specialCharacter = ['$','@','%'];


// d) Numbers created array from scracth
//Issue 2: Get complete array of numbers
const numeric = ['0','1','2','3','4','5','6','7','8','9'];



var isUppercase = Boolean("Should your password contain any uppercase letters?");
var isLowercase = Boolean("Should your password contain any lowercase letters?");
var isSpecialCharacter= Boolean("Should your password contain any special characters?");
var isNumeric = Boolean("Should your password contain any numbers?");


if(isUppercase == true){ // con
  finalPassword = finalPassword.concat(upper);
}
if(isLowercase == true){
  finalPassword = finalPassword.concat(lower);
}
if(isSpecialCharacter == true){
  finalPassword = finalPassword.concat(specialCharacter);
}
if(isNumeric == true){
  finalPassword = finalPassword.concat(numeric);
}


// Issue 2: Need numbers that repeat, 

// Find the length of possible char for password
let lengthFinalPassword =  finalPassword.length;
// Issue: if lengthFinalPassword  is 0  (false for all boolean)

// randomly select
// number of Digits
// from final Password


// Issue: Make above code a method
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
