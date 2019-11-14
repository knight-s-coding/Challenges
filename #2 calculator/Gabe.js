var number1;
var number2;
var operation;
var disableNum = false;

function add(){
   if(number1==null){
      var x = document.getElementById("answer").textContent; 
      document.getElementById("answer").innerHTML = "";
      number1 = parseInt(x,10)
   }
   operation=1
}
function subtract(){
   if(number1==null){
      var x = document.getElementById("answer").textContent; 
      document.getElementById("answer").innerHTML = "";
      number1 = parseInt(x,10)
   }
   operation=2
}
function multiply(){
   if(number1==null){
      var x = document.getElementById("answer").textContent; 
      document.getElementById("answer").innerHTML = "";
      number1 = parseInt(x,10)
   }
   operation=3
}
function divide(){
   if(number1==null){
      var x = document.getElementById("answer").textContent; 
      document.getElementById("answer").innerHTML = "";
      number1 = parseInt(x,10)
   }
   operation=4
}

function one(){
   addNumbers(1);
}
function two(){
    addNumbers(2);
 }
 function three(){
    addNumbers(3);
 }
 function four(){
    addNumbers(4);
 }
 function five(){
    addNumbers(5);
 }
 function six(){
    addNumbers(6);
 }
 function seven(){
    addNumbers(7);
 }
 function eight(){
    addNumbers(8);
 }
 function nine(){
    addNumbers(9);
 }
 function zero(){
   addNumbers(0);
}

function addNumbers(number){
      var x = document.getElementById("answer").textContent; 
      if(x.length < 9){
         if(disableNum == false){
            document.getElementById("answer").innerHTML = x + number;
         }
      }
     
      
}
function calculate(){
   var x = document.getElementById("answer").textContent; 
   if(number1 != null && x != "" && disableNum == false){
      number2 = parseInt(x,10)
      switch(operation){
         case 1:
            document.getElementById("answer").innerHTML = number1 + number2;
            x = document.getElementById("answer").textContent; 
            if(x.length > 9){
               document.getElementById("answer").innerHTML = "Error";
            }               
            break;
         case 2:
            document.getElementById("answer").innerHTML = number1 - number2;
            x = document.getElementById("answer").textContent; 
            if(x.length > 9){
               document.getElementById("answer").innerHTML = "Error";
            }
            break;
         case 3:
            document.getElementById("answer").innerHTML = number1 * number2;
            x = document.getElementById("answer").textContent; 
            if(x.length > 9){
               document.getElementById("answer").innerHTML = "Error";
            }
            break;            
         case 4:
            document.getElementById("answer").innerHTML = number1 / number2;
            x = document.getElementById("answer").textContent; 
            if(x.length > 9){
               document.getElementById("answer").innerHTML = "Error";
            }
            break;
      }
      disableNum = true
   }
}

function clearScreen(){
   document.getElementById("answer").innerHTML = "";
   disableNum = false
   number1 = null;
   number2 = null;
}