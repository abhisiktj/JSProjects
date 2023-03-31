let isStarted=false;
let canClick=false;
let arr=[];
let clicked=[];
let level=1;
let green=document.getElementsByClassName("green")[0];
let red=document.getElementsByClassName("red")[0];
let blue=document.getElementsByClassName("blue")[0];
let yellow=document.getElementsByClassName("yellow")[0];

window.addEventListener("keyup",function(){
    if(isStarted==false){
        arr=[];
        level=0;
        document.getElementById("heading").innerHTML=`Level ${level}`;
        isStarted=true;
      start();
    }
})

    async function start(){
    arr.push(generateRandom());
    await blink(arr);
    canClick=true;
    clicked=[];
    }
    
function generateRandom(){
    return Math.floor(Math.random() * 4) + 1;
    
}
function blink(arr){
      
    return new Promise(function(resolve,reject){
        let b=arr[arr.length-1];
        if(b==1){
          green.classList.add("active");
          document.getElementById("green-audio").play();
        }
        
        else  if(b==2){
          red.classList.add("active");
          document.getElementById("red-audio").play(); 
        }
          
         else if(b==3){
          yellow.classList.add("active");
          document.getElementById("yellow-audio").play(); 
        }
          
        else   if(b==4){
          blue.classList.add("active");
          document.getElementById("blue-audio").play(); 
        } 
    
        setTimeout(() => {
            green.classList.remove("active");
            red.classList.remove("active");
            blue.classList.remove("active");
            yellow.classList.remove("active");
        }, 500);
        setTimeout(() => {
            resolve();
        }, 1000);
        
    })
}

function tileClicked(e){
    let s;
    if(canClick){
        
          if(e.target.classList.contains("green"))
           s=1;
          else if(e.target.classList.contains("red"))
          s=2;
          else if(e.target.classList.contains("yellow"))
          s=3;
          else if(e.target.classList.contains("blue"))
          s=4; 
     
        clicked.push(s);
        blink([s]).then(function(){
            if(arr[clicked.length-1]!=clicked[clicked.length-1]){
                document.getElementById("heading").innerHTML="Game Over Press Any key To Restart"
                isStarted=false;
                document.getElementById("wrong-audio").play();
                console.log(arr,clicked);
            }

       else if(arr.length==clicked.length){
            canClick=false;
            level++;
            document.getElementById("heading").innerHTML=`Level ${level}`;
           start();
        }
        }  );
        
    }
    
}