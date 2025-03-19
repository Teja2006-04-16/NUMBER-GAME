var noOfLives=document.getElementById("livesNo");
 var msg=document.getElementById("message");
 var input=document.getElementById("number").value;
 var submit=document.getElementById("submit");
 
 var randomNumber=Math.round(Math.random()*100);
 
 var lives=5;
 var message;
 
 submit.onclick= () => {
     //console.log(randomNumber);
     var  userinput=document.getElementById("number").value;
     lives--;
     if(userinput == randomNumber)
      location.href="./win.html";
     else if(lives == 0)
         location.href="./lose.html";
     else if(userinput > randomNumber)
         message="Oops! Your guess is too high!";
     else if(userinput < randomNumber)
         message="Oops! Your guess is too low!";
     msg.style.display ="inherit";
     msg.innerHTML =message;
     noOfLives.innerHTML =lives;
 }