// Assignment Code
var generateBtn = document.querySelector("#generate");

// declare array var for chars types
// prompt user for chars types
// set the value of valid chars to be equal to all the chars type that the user uses

var numbers = [0,1,2,3,4,5,6,7,8,9]
var uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a","b","c","d","e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var symbols = ["!","@","#","$","%","^","&","*",(","),"_","=","+","?","/","|","{","}","[","]","<",">"]


 

// var validChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","M","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*",(","),"_","=","+","?","/","|","{","}","[","]","<",">", "0","1","2","3","4","5","6","7","8","9"]

//var passwordLength = 12;



function generatePassword(){

  var passwordLength = parseInt(prompt("Enter a number between 8 and 128"));
  
  
  if (passwordLength < 8 || passwordLength > 128){
    alert("password must be between 8 - 128 characters?")
    return null;
  }
  
  if (Number.isNaN(passwordLength)){
    alert('password must be a number')
    return null
  }
  
  var numbersQ = confirm("Do you want to use numbers in your password?");
  var capsQ = confirm("Do you want to use uppercase?"); 
  var lowerQ = confirm("Do you want to use lowercase?");
  var specialQ = confirm("Do you want to use special character?");

  if(numbersQ === false && capsQ === false && lowerQ ===false && specialQ ===false){
    alert("must select at least one option")
    return null;
  }

var Character_pool= [];
var chosenChar = [];

if (numbersQ){
  //console.log ("user want to add a number")
  Character_pool = Character_pool.concat(numbers)
  chosenChar.push(getRandome(numbers))
} 
if (capsQ){
  //console.log ("user want to add caps")
  Character_pool = Character_pool.concat(uppercase)
  chosenChar.push(getRandome(uppercase))
} 
if (lowerQ){
  //console.log ("user want to add  lowers")
  Character_pool = Character_pool.concat(lowercase)
  chosenChar.push(getRandome(lowercase))
} 
if (specialQ){
 // console.log ("user want to add specials")
 Character_pool = Character_pool.concat(symbols)
 chosenChar.push(getRandome(symbols))
} 


console.log(passwordLength, typeof passwordLength)
var final = [];
  // Write password to the #password input
  for (var i = 0; i < passwordLength; i++) {
    
    // console.log(i)
    //   console.log(validChars.length)

      var num = getRandome(Character_pool)
      console.log(num)
      //console.log(validChars[num])
      final.push(num)
      
      // password+= Character_pool[num]
      //console.log(password)
     
  }

  for (let i = 0; i < chosenChar.length; i++) {
    final[i]= chosenChar[i]
    
  }

 console.log(final)
  return final.join('');
 
}


//document.getElementById(password) . innerHTML = text;


  function getRandome (max) {
    return  max[Math.floor(Math.random() * max.length )]; 
    
    console.log(Math.random());
  }
  

function writePassword() {

  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
if (numbers.length){
  
}