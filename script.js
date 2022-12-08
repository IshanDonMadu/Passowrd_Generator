var lengthArry = 8;
var select = [];

// PW contents 

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharactor = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":","\"","\\"];
var nummber = [ "0", "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8","9"];

// Assignment Code
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var mainPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (mainPrompts){
    var NewPassword = generatePassword();
    passwordText.value = NewPassword;
  } else{
    passwordText.value = "";
  }


  

}
// generate Password 
function generatePassword(){
  var password = "";
  for(var i = 0; i < lengthArry; i++){
    var randomIndex = Math.floor(Math.random() * select.length);
    password = password + select [randomIndex];
  }
  return password;
}

// prompts
function getPrompts(){

    select=[];

    lengthArry = parseInt(prompt("How many characters would you like your password to create?"));

    if(isNaN(lengthArry) || lengthArry < 8 || lengthArry > 128 ){
      alert("Charactor lengthArry would be between 8 to 128 digits.");
      return false;
    }

    if (confirm("Do you want to Lowercase Letters?")){
      select = select.concat(lowerCase);
    }
    if (confirm("Do you want to Uppercase Letters?")){
      select = select.concat(upperCase);
    }
    if (confirm("Do you want to Special Charactor? ")){
      select = select.concat(specialCharactor);
    }
    if (confirm("Do you want to Numbers? ")){
      select = select.concat(nummber);
    }
    return true;


}


