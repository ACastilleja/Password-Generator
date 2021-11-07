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
     var uppercase = 1;
     
    }
    else if (upper==="N" || upper=="n") {
    var uppercase = 0;
    }
//lowercase prompt    
 let lower = window.prompt("Do you want lowercase Y or N","");
 if (lower==="Y" || lower==="y") {
  var lowercase = 1;
  
 }
 else if (lower==="N" || lower=="n") {
 var lowercase = 0;
 }
//number prompt
let nnumber = window.prompt("Do you want number Y or N","");
if (nnumber==="Y" || nnumber==="y") {
 var number = 1;
}
else if (nnumber==="N" || nnumber=="n") {
var number = 0;
}
//symbol prompt 
let ssymbol = window.prompt("Do you want symbol Y or N","");
if (ssymbol==="Y" || ssymbol==="y") {
 var symbol = 1;
}
else if (ssymbol==="N" || ssymbol=="n") {
var symbol = 0;
}

//password generation

function getRandomLower() {
  if(lowercase == 1){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
  }
}
function getRandomUpper() {
  if(uppercase == 1){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
  }
}
function getRandomNumber() {
  if(number == 1) {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
  }
}
function getRandomSymbol() {
  if(symbol == 1){
  const symbols = '!@#$%^&*(){}[]=+/?<>'
  return symbols[Math.floor(Math.random()*symbols.length)];
  }
}
var passwordArr = [];


for (let i=0; i<length; i++){
const rUpper = getRandomUpper();
const rLower = getRandomLower();
const rNumber = getRandomNumber();
const rSymbol = getRandomSymbol();
passwordArr.push(rUpper,rLower,rNumber,rSymbol);
if (passwordArr.length>=length){
  break;
}
//const passwordArr = [{rUpper},{rLower},{rNumber},{rSymbol}];

}
const password = passwordArr;
return password;
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

