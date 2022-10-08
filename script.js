//
//
// A. Create array of all possible chars
//
//

// A.1 uppercase array - Found code to create uppercase alphabet - https://plainenglish.io/blog/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const upper = alpha.map((x) => String.fromCharCode(x));


// A.2 lowercase array - Found method to change upper into lower
//https://bobbyhadz.com/blog/javascript-convert-all-elements-of-array-to-lowercase#:~:text=To%20convert%20all%20array%20elements,array%20containing%20only%20lowercase%20strings.
const lower = upper.map(element => {
  return element.toLowerCase();
});



// A.3 Special Characters created array from scracth
//Issue 2: Get complete array of special character
const specialCharacter =  ['"',' ','!','"',
'#','$','%','&',
'\'','(',')','*','+',
',','-','.','/',':',';',
'<','=','>','?','@','[',
'\\',']','^','_','`','{','|','}','~','"'];

// A.4 Numbers created array from scracth
//Issue 3: Get complete array of numbers
const numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];















//
//
// B. Get Preferences from user
//
//

// B.1 User provides length of password
var slider = document.getElementById("myRange");
var lengthOfOptionsfinalPP = document.getElementById("demo");
lengthOfOptionsfinalPP.innerHTML = slider.value;
// Display Slider in HTML
slider.oninput = function () {
  lengthOfOptionsfinalPP.innerHTML = this.value;
}
// B.2 Determine whether user wants uppercase letters
var uppercaseCheckBox = document.getElementById("isUppercase");
// B.3 Determine whether user wants lowercase letters
var lowercaseCheckBox = document.getElementById("isLowercase");
// B.4 Determine whether user wants special characters
var specialCharacterCheckBox = document.getElementById("isSpecialCharacter");
// B.5 Determine whether user wants numeric
var numericCheckBox = document.getElementById("isNumeric");




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// C. Generate Password Function
// Name: generatePassword 
// Purpose: Generate password based on specificaitons
// Input: NA
// Output: Password
// Notes:  NA
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var generatePassword = function () {

  //
  //
  // C. Part i - Determine whether chars should be added based on user's input 
  //
  //
  // C.i.0 Define empty password array
  var finalPasswordPossibilities = [];
  if (uppercaseCheckBox.checked == true) { // C.i.1 Does user want uppercases chars
    finalPasswordPossibilities = finalPasswordPossibilities.concat(upper);
  }
  if (lowercaseCheckBox.checked == true) { // C.i.2 Does user want lowercases chars
    finalPasswordPossibilities = finalPasswordPossibilities.concat(lower);
  }
  if (specialCharacterCheckBox.checked == true) { // C.i.3 Does user want special chars
    finalPasswordPossibilities = finalPasswordPossibilities.concat(specialCharacter);
  }
  if (numericCheckBox.checked == true) { // C.i.4 Does user want numeric
    finalPasswordPossibilities = finalPasswordPossibilities.concat(numeric);
  }

  // If the user does not select any char type, we will include all types
  if (uppercaseCheckBox.checked == false &
    lowercaseCheckBox.checked == false &
    specialCharacterCheckBox.checked == false &
    numericCheckBox.checked == false) { // C.i.4 Does user want numeric
    finalPasswordPossibilities = finalPasswordPossibilities.concat(upper);
    finalPasswordPossibilities = finalPasswordPossibilities.concat(lower);
    finalPasswordPossibilities = finalPasswordPossibilities.concat(specialCharacter);
    finalPasswordPossibilities = finalPasswordPossibilities.concat(numeric);
  }




  //
  //
  // C. Part ii - Generate a Random Array of Numbers based on length of possibilities array
  //
  //

  // C.ii.1 Storing Length
  var lenFinalPassword = Number.parseInt(slider.value);


  // C.ii.2 Based on length of password and possble chars password is generated
  let result = new Array(lenFinalPassword)
  var finalPW = result.fill(0).map(() => finalPasswordPossibilities[Math.floor(Math.random() * finalPasswordPossibilities.length)]);

  // C.ii.3 Removes commas from password and returns it
  return finalPW.join('');

};










//
//
// D. React to Button Pressed
//
//

// D.1 Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// D2.
// Name: checkBoxFunction 
// Purpose: Ability to get inforamtion from checkbox
// Input: info from reader
// Output: NA
// Notes:  NA
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function checkBoxFunction(info) {
  var checkBox = document.getElementById(info);
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// D3. 
// Name: writePassword
// Purpose: Ability to write password back to html
// Input: NA
// Output: NA
// Notes:  NA
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function writePassword() {
  // Use function to generate password
  var password = generatePassword();
  // Write password to the #password input
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// D4.  Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

