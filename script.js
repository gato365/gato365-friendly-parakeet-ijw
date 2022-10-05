// Assignment code here



// Comment: Empty password
const finalPassword = '';

//  Comment: User provides length of password
var passwordLength = prompt("What is the length of your password?","GeeksforGeeks");
// Issue 1: Error Check to make sure user provides a number


isUppercase = Boolean("Should your password contain any uppercase letters?");
isLowercase = Boolean("Should your password contain any lowercase letters?");
isSpecialCharacter= Boolean("Should your password contain any special characters?");
isNumber = Boolean("Should your password contain any numbers?");


if(isUppercase == true){
finalPassword = upper + finalPassword
}
if(isLowercase == true){
  finalPassword = lower + finalPassword
}
if(isSpecialCharacter == true){
  finalPassword = specialCharacter + finalPassword
}
if(isNumeric == true){
  finalPassword = numeric + finalPassword
}


// Issue 2: Need numbers that repeat, 
// randomly select
// number of Digits
// from final Password




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
