var state = history.state || {};
var reloadCount = state.reloadCount || 0;
if (performance.navigation.type === 1) { // Reload
    state.reloadCount = ++reloadCount;
    history.replaceState(state, null, document.URL);
} else if (reloadCount) {
    delete state.reloadCount;
    reloadCount = 0;
    history.replaceState(state, null, document.URL);
}
if (reloadCount >= 1) {
    startGame();
}

function display(num,dice,arr){
    console.log("display");
    let childrenArr=dice.children;
    for(let i=0;i<childrenArr.length;i++){
        childrenArr[i].style.display="none";
    }
    if(num==1){
      dice.getElementsByClassName("center")[0].style.display="block";
    }
    else if(num==2){
        dice.getElementsByClassName("top-left")[0].style.display="block";
        dice.getElementsByClassName("bottom-right")[0].style.display="block";
    }
    else if(num==3){
        dice.getElementsByClassName("top-left")[0].style.display="block";
        dice.getElementsByClassName("bottom-right")[0].style.display="block";
        dice.getElementsByClassName("center")[0].style.display="block";
    }
    else if(num==4){
        dice.getElementsByClassName("bottom-left")[0].style.display="block";
        dice.getElementsByClassName("top-right")[0].style.display="block";
        dice.getElementsByClassName("top-left")[0].style.display="block";
        dice.getElementsByClassName("bottom-right")[0].style.display="block";

    }
    else if(num==5){
        dice.getElementsByClassName("top-left")[0].style.display="block";
        dice.getElementsByClassName("bottom-right")[0].style.display="block";
        dice.getElementsByClassName("center")[0].style.display="block";
        dice.getElementsByClassName("bottom-left")[0].style.display="block";
        dice.getElementsByClassName("top-right")[0].style.display="block";
    }
    else if(num==6){
        dice.getElementsByClassName("top-left")[0].style.display="block";
        dice.getElementsByClassName("bottom-right")[0].style.display="block";
        dice.getElementsByClassName("bottom-left")[0].style.display="block";
        dice.getElementsByClassName("top-right")[0].style.display="block";
        dice.getElementsByClassName("left-center")[0].style.display="block";
        dice.getElementsByClassName("right-center")[0].style.display="block";

    }
    let heading=document.getElementsByTagName("h1")[0];
        if(arr[0]==arr[1])
          heading.innerHTML="Its a Draw";
         else if(arr[0]>arr[1])
            heading.innerHTML="Player 1 Won";
          
         else 
           heading.innerHTML="Player 2 Won";
}

function randomNumberGenerator(){
    console.log("random")
    let min=1;
     let max=6;
     return Math.floor(Math.random() * (max - min + 1) + min)
 }
function startGame(){
    console.log("start");
    let arr=[];
    let i=0;
    let dices=document.getElementsByClassName("face");
    for(let dice of dices){
        let num=randomNumberGenerator();
        arr[i]=num;
        i++;
       window.addEventListener("load",function(){
        display(num,dice,arr);
       });
    }
}

