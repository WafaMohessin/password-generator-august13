// Assignment Code
var generateBtn = document.querySelector("#generate");

/*var Numbers = [0,1,2,3,4,5,6,7,8,9]
var Uppercase =["A","B","C","D","E", "F","G","H","I","J","K","L","M","M","O","P","Q","R","S","T","U","V","W","X,"Y","Z"]
var Lowercase = ["a","b","c","d","e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x,"y","z"]
var Symbols = ["!","@","#","$","%","^","&","*",(","),"_","=","+","?","/","|","{","}","[","]","<",">"]

var passwordLength = prompt("Please enter 8 to 128 charactors")
var numbers = confirm("Enter number or more in yuor password")
var caps = confirm("Enter at least one Uppercase or more in yuor password") 
var lower = confirm("Enter lowercase letter or more in yuor password")
var special = confirm("Enter special character or more in yuor password")*/

var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+/?.><,\|{[}]:;"
var passwordLength = 128;
var password = "",

// Write password to the #password input
 for (var i = 0; i < passwordLength; i++) {
   var randomNumbers= Math.floor(Math.random() * chars.lenght);
   password.document.getElementById("password").value=password

 }


/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}*/

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
if (){
  
}
