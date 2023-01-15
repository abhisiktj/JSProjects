let user_score=0;
let computer_score=0;


document.getElementById("btn").addEventListener("click",function(){
    location.reload();
})
document.getElementById('rock').addEventListener("click",function(){
   game(this);
});
document.getElementById('paper').addEventListener("click",function(){
    game(this);
 });

 document.getElementById('scissor').addEventListener("click",function(){
    game(this);
 });

 function game(choice){
    max=3;
    min=1
    num=Math.floor(Math.random() * (max - min + 1) + min)
if(choice.id=="rock"){
   if(num==2)
      computer_score++;

   else if(num==3)
     user_score++;
}
else if(choice.id=="paper"){
    if(num==1)
     user_score++;

    else if(num==3)
     computer_score++;
 }

 else{
     if(num==1)
       computer_score++;
    
     else(num==2)
       user_score++;
 }
 updateScore()
 }
 


function updateScore(){
    document.getElementById("user-score").innerHTML=user_score;
    document.getElementById("computer-score").innerHTML=computer_score;
    if(user_score==10 ||computer_score==10){
        if(user_score==10){
            document.getElementById("result").innerHTML="User Won!";
        }
        else{
            document.getElementById("result").innerHTML="Computer Won!";
        }
         const choices=document.getElementsByClassName("choice");
         for(let choice of choices){
            choice.classList.add("game-over");
         }
        document.getElementsByClassName("finish")[0].classList.add("finish-active");
        document.getElementsByClassName("overlay")[0].classList.add("overlay-active");
    }
    
}
