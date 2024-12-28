// selcting numbers
var inputbox=document.getElementById("inuptnum")
var result=document.getElementById("textans")
var guesscount=document.getElementById("guessno")
var guessvalue=3;
// generate random number
 var randomnumber= Math.floor(Math.random()*10+1)
if(randomnumber>5){
    randomnumber=randomnumber-5;
}
 function checknum(){
    if(inputbox.value==randomnumber){
        result.textContent="You are Right!!!"
        alert("You got Right congratulations")
    }
    else{
        result.textContent="You are Wrong!!!"
        guessvalue=guessvalue-1
        if(guessvalue==0){
            alert("You Lost, Generated Number is :" +randomnumber)
        }
      
        guesscount.textContent="Avaliable Guesses :"+guessvalue

   
}
 }
