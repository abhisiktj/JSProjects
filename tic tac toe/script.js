let ticTac="X";
let toe="";
let count=0;
const input=document.getElementsByClassName("input");
let win=false;
let flag=1;

for(let inp of input){
  inp.addEventListener("click", function (){
    played(inp);

  });
}
function played(inp){

   if(inp.innerHTML!="")
     return;

    inp.innerHTML=ticTac;
    count++;

    if(ticTac=="O")
      ticTac="X";
    else  
      ticTac="O";

checkForWin(0,1,2);
checkForWin(3,4,5);
checkForWin(6,7,8);
checkForWin(0,3,6);
checkForWin(1,4,7);
checkForWin(2,5,8);
checkForWin(0,4,8);
checkForWin(2,4,6);
}

function checkForWin(i,j,k){
    if(input[i].innerHTML=="" || input[j].innerHTML=="" || input[k].innerHTML=="")
      return;

    if(input[i].innerHTML==input[j].innerHTML && input[j].innerHTML==input[k].innerHTML){
        win=true;
        if(ticTac=="O")
          toe="X";
        else if(ticTac="X")
          toe="O";
    }
if(flag==1){
    if(win==true){
        flag=0;
       document.getElementsByClassName("rules")[0].style.display="none";
       document.getElementsByClassName("container")[0].style.display="none";
       document.getElementsByClassName("result")[0].style.display="flex";
       if(toe=="X")
         document.getElementsByClassName("result")[0].firstChild.innerHTML="Player 1 Won";
       else
       document.getElementsByClassName("result")[0].firstChild.innerHTML="Player 2 Won";
    }

    if(win==false&&count==9){
        flag=0;
        document.getElementsByClassName("rules")[0].style.display="none";
       document.getElementsByClassName("container")[0].style.display="none";
       document.getElementsByClassName("result")[0].style.display="flex";
       document.getElementsByClassName("result")[0].firstChild.innerHTML="Match Drawn";
    }
    
}
}

document.querySelector("button").addEventListener("click",function(){
    location.reload();
})
