// Assignment code here



// Comment: Empty password
// Str final Password =""

//  From user
// int number Of Digits =_
// If (is Uppercase = = TRUE){
// final Password = upper + final Password
// }'
// if (is Lowercase = = TRUE){
// final Password = lower + final Password
// }'
// Éf (is special character = = TRUE){
// final Password = special character 1- final Password
// }'
// if (is Numeric--= TRUE){
// final Password = Numeric + final Password
// }'
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
