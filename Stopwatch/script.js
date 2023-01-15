let hr=0;
let min=0;
let sec=0;
let ms=0;
let dms=0;
var timer=false;
var starttime;

function stopwatch(){
   if(timer==true){
   ms=new Date()-starttime;
    dms=ms%1000;
   

   sec=(Math.floor(ms/1000))%60;
   min=(Math.floor(ms/60000))%60;
   hr=(Math.floor(ms/3600000))%60;

   if(dms>=100)
   document.getElementById("mili").innerHTML=dms;
    else if(dms>=10)
    document.getElementById("mili").innerHTML="0"+dms;
    else
    document.getElementById("mili").innerHTML="00"+ dms;

     if(sec>=10)
    document.getElementById("seconds").innerHTML=sec;
    else
    document.getElementById("seconds").innerHTML="0"+ sec;
    
    if(min>=10)
    document.getElementById("minute").innerHTML=min;
    else
    document.getElementById("minute").innerHTML="0"+ min;
    
    if(hr>10)
    document.getElementById("hour").innerHTML=hr;
    else
    document.getElementById("hour").innerHTML="0"+ hr;
    
    setTimeout("stopwatch()",10);
   }
}
function start(){
    if(timer==false){
starttime=new Date()-ms;
timer=true;
stopwatch();
    }
}


function stop(){
if(timer==true){
  timer=false;
}
}

function lap(){
    if(timer==true){
   let  laps=document.createElement("div");
   laps.className="laps";
   if(dms<10)
     dms="00"+dms;
     else if(dms<100)
      dms="0"+dms;
    
      
    laps.innerHTML=`${hr}:${min}:${sec}:${dms}`;
    document.getElementById("lapContainer").appendChild(laps);
    }
}
function reset(){
    let laps=document.getElementsByClassName("laps");
    for(lap of laps)
      lap.style.display="none";

    timer=false;
    ms=0
    dms=0
    hr=0;
    min=0;
    sec=0;
    document.getElementById("mili").innerHTML="00";
    document.getElementById("seconds").innerHTML="00";
    document.getElementById("minute").innerHTML="00";
    document.getElementById("hour").innerHTML="00";

}
