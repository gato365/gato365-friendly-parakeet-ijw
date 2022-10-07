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
const specialCharacter = ['$', '@', '%', '!', '#', '%', '^', '&'];


// B.4 Numbers created array from scracth
//Issue 3: Get complete array of numbers
const numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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




///
// PROBLEM 2: What is this doing? Do I need it?

slider.oninput = function () {
  lengthOfOptionsfinalPP.innerHTML = this.value;
}



// A.2 Determine whether user wants uppercase letters
var uppercaseCheckBox = document.getElementById("isUppercase");





// A.3 Determine whether user wants lowercase letters
var lowercaseCheckBox = document.getElementById("isLowercase");


// A.4 Determine whether user wants special characters
var specialCharacterCheckBox = document.getElementById("isSpecialCharacter");

// A.5 Determine whether user wants numeric
var numericCheckBox = document.getElementById("isNumeric");



var generatePassword = function () {


  //
  //
  // C. Add chars to array of password if user wants it
  //
  //

  // Define empty password array
  var finalPasswordPossibilities = [];
  if (uppercaseCheckBox.checked == true) { // C.1 Does user want uppercases chars
    finalPasswordPossibilities = finalPasswordPossibilities.concat(upper);
  }
  if (lowercaseCheckBox.checked == true) { // C.2 Does user want lowercases chars
    finalPasswordPossibilities = finalPasswordPossibilities.concat(lower);
  }
  if (specialCharacterCheckBox.checked == true) { // C.3 Does user want special chars
    finalPasswordPossibilities = finalPasswordPossibilities.concat(specialCharacter);
  }
  if (numericCheckBox.checked == true) { // C.4 Does user want numeric
    finalPasswordPossibilities = finalPasswordPossibilities.concat(numeric);
  }




  //
  //
  // D. Generate a Random Array of Numbers based on length of possibilities array
  //
  //

// Storing Length
var lenFinalPassword = Number.parseInt(slider.value);
console.log(lenFinalPassword)

  // Issue 5: How do I make this give me random numbers?
  let result = new Array(lenFinalPassword)
  var randomNumberIndices = result.fill(0).map(() => finalPasswordPossibilities [  Math.floor(Math.random() * finalPasswordPossibilities.length)] );
  

  //Issue 6: How do I make this work so that the random numbers get the indices of the array
  


  // Issue 7: Make above code a method


  // Issue 8: How do I make incorporate this into the below function?
  return randomNumberIndices.join('') ;
};




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function checkBoxFunction(info) {
  var checkBox = document.getElementById(info);
  // var text = document.getElementById("text");

}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

