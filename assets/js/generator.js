// Assignment code here
 var generatePassword = function() {

//length prompt
 let plength = parseFloat(window.prompt("Type Length of password:",""));
    if (plength>=8 && plength<=128) {
      var length = plength;
    }
    else {
      alert("pasword must be between 8 and 128 characters long");
    return generatePassword();
    }
//uppercase prompt
 let upper = window.prompt("Do you want uppercase Y or N","");
    if (upper==="Y" || upper==="y") {
     var uppercase = true;
    }
    else if (upper==="N" || upper=="n") {
    var uppercase = null;
    }
//lowercase prompt    
 let lower = window.prompt("Do you want lowercase Y or N","");
 if (lower==="Y" || lower==="y") {
  var lowercase = true;
 }
 else if (lower==="N" || lower=="n") {
 var lowercase = null;
 }
//symbol prompt 
let ssymbol = window.prompt("Do you want symbol Y or N","");
if (ssymbol==="Y" || ssymbol==="y") {
 var symbol = true;
}
else if (symbol==="N" || symbol=="n") {
var symbol = null;
}
console.log (uppercase,lowercase,symbol);
};


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

