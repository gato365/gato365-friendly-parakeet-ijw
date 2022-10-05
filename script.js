// Assignment code here



// Comment: Empty password
var finalPasswordPossibilities = [];

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
  finalPasswordPossibilities = finalPasswordPossibilities.concat(upper);
}
if(isLowercase == true){
  finalPasswordPossibilities = finalPasswordPossibilities.concat(lower);
}
if(isSpecialCharacter == true){
  finalPasswordPossibilities = finalPasswordPossibilities.concat(specialCharacter);
}
if(isNumeric == true){
  finalPasswordPossibilities = finalPasswordPossibilities.concat(numeric);
}


// Issue 3: Need numbers that repeat, 
// Issue 4: if lengthfinalPasswordPossibilities  is 0  (false for all boolean)


// Generate a Random Array of Numbers based on length of possibilities array
let result = new Array(finalPasswordPossibilities.length)
var randomNumberIndices = result.fill(0).map(() => Math.floor(Math.random()*lengthOfOptionsfinalPasswordPossibilities);


var finalPassword = _.at(finalPasswordPossibilities, randomNumberIndices);


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
