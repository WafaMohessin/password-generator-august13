// Assignment Code
var generateBtn = document.querySelector("#generate");

// declare array var for chars types
// prompt user for chars types
// set the value of valid chars to be equal to all the chars type that the user uses

var numbers = [0,1,2,3,4,5,6,7,8,9]
var uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a","b","c","d","e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var symbols = ["!","@","#","$","%","^","&","*",(","),"_","=","+","?","/","|","{","}","[","]","<",">"]

var Character_pool= []
 

// var validChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","M","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*",(","),"_","=","+","?","/","|","{","}","[","]","<",">", "0","1","2","3","4","5","6","7","8","9"]

//var passwordLength = 12;
var password = " ";


function generatePassword(){

  var passwordLength = prompt("Enter a number between 8 and 128");
  var numbersQ = confirm("Your password should have at least one number.");
  var capsQ = confirm("Your password should have at least one uppercase."); 
  var lowerQ = confirm("Your password should have at least one lowercase.");
  var specialQ = confirm("Your password should have at least one special character.");



if (numbersQ){
  //console.log ("user want to add a number")
  Character_pool.push(...numbers)
} 
if (capsQ){
  //console.log ("user want to add caps")
  Character_pool.push(...uppercase)
} 
if (lowerQ){
  //console.log ("user want to add  lowers")
} Character_pool.push(...lowercase)
if (specialQ){
 // console.log ("user want to add specials")
 Character_pool.push(...symbols)
} 




passwordLength=parseInt(passwordLength)

console.log(passwordLength, typeof passwordLength)

  // Write password to the #password input
  for (var i = 0; i < passwordLength; i++) {
    
    // console.log(i)
    //   console.log(validChars.length)

      var num = getrandome (Character_pool.length)
      console.log(num)
      //console.log(validChars[num])
      
      password+= Character_pool[num]
      //console.log(password)
     
  }

  return password
 
}


//document.getElementById(password) . innerHTML = text;


  function getrandome (max) {
    return  Math.floor(Math.random() * max ); 
    
    console.log(Math.random());
  }
  

function writePassword() {

  password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
if (numbers.length){
  
}