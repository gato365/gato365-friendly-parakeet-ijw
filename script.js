
// Define empty password array
var finalPasswordPossibilities = [];


//
//
// A. Get Preferences from user
//
//

// A.1 User provides length of password
var slider = document.getElementById("myRange");
var lengthOfOptionsfinalPP = document.getElementById("demo");
//
//  Problem 1: Why is this Telling HTML what to print
//
lengthOfOptionsfinalPP.innerHTML = slider.value;

// Storing Length
var lenFinalPassword = slider.value;


///
// PROBLEM 2: What is this doing? Do I need it?
///
slider.oninput = function() {
  lengthOfOptionsfinalPP.innerHTML = this.value;
}


// A.2 Determine whether user wants uppercase letters
var isUppercase = document.getElementById("isUppercase");

console.log(isUppercase);















// A.3 Determine whether user wants lowercase letters
var isLowercase = document.getElementById(isLowercase);


// A.4 Determine whether user wants special characters
var isSpecialCharacter = document.getElementById(isSpecialCharacter);

// A.5 Determine whether user wants numeric
var isNumeric = document.getElementById(isNumeric);


//
//
// B. Create array of all possible chars
//
//

// B.1 uppercase array - Found code to create uppercase alphabet - https://plainenglish.io/blog/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const upper = alpha.map((x) => String.fromCharCode(x));


// B.2 lowercase array - Found method to change upper into lower
//https://bobbyhadz.com/blog/javascript-convert-all-elements-of-array-to-lowercase#:~:text=To%20convert%20all%20array%20elements,array%20containing%20only%20lowercase%20strings.
const lower = upper.map(element => {
  return element.toLowerCase();
});

// B.3 Special Characters created array from scracth
//Issue 2: Get complete array of special character
const specialCharacter = ['$','@','%'];


// B.4 Numbers created array from scracth
//Issue 2: Get complete array of numbers
const numeric = ['0','1','2','3','4','5','6','7','8','9'];



//
//
// C. Add chars to array of password if user wants it
//
//


if(isUppercase == true){ // C.1 Does user want uppercases chars
  finalPasswordPossibilities = finalPasswordPossibilities.concat(upper);
}
if(isLowercase == true){ // C.2 Does user want lowercases chars
  finalPasswordPossibilities = finalPasswordPossibilities.concat(lower);
}
if(isSpecialCharacter == true){ // C.3 Does user want special chars
  finalPasswordPossibilities = finalPasswordPossibilities.concat(specialCharacter);
}
if(isNumeric == true){ // C.4 Does user want numeric
  finalPasswordPossibilities = finalPasswordPossibilities.concat(numeric);
}


// Issue 3: Need numbers that repeat, 
// Issue 4: if lengthfinalPasswordPossibilities  is 0  (false for all boolean)

//
//
// D. Generate a Random Array of Numbers based on length of possibilities array
//
//

let result = new Array(finalPasswordPossibilities.length)
var randomNumberIndices = result.fill(0).map(() => Math.floor(Math.random()*lenFinalPassword));


// var finalPassword = _.at(finalPasswordPossibilities, randomNumberIndices);


// Issue 5: Make above code a method















// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function checkBoxFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");

}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

