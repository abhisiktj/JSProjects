document.getElementsByClassName("container")[0].style.display="none";
const inputField=document.getElementById("input");
let flag=1;
// inputField.addEventListener("keyup",function(event){
//   if(event.key==="Enter"){
//     addTask(event.target.value);
//     }
// });

// inputField.addEventListener("input",function(){
//    addTask(this.value)
// });

document.getElementById("add").addEventListener("click",function(){
  if(inputField.value!="")
    addTask(inputField.value);
});


function addTask(task){
  document.getElementsByClassName("container")[0].style.display="flex";
  flag=0;
    let div=document.createElement("div");
    div.className="task";
    let span=document.createElement("span");
    span.className="input-task";
    span.innerHTML=task;

    let childDiv=document.createElement("div");
    childDiv.className="utility";

    let inp=document.createElement("input");
    inp.setAttribute("type","checkbox");
    inp.className="utility-icon";

    let deleteIcon=document.createElement("img");
    deleteIcon.setAttribute("src","images/delete.png");
    deleteIcon.setAttribute("onclick","removeTask(this.parentElement.parentElement)");

    let editIcon=document.createElement("img");
    editIcon.setAttribute("onclick","editTask(this.parentElement.previousElementSibling)");
    editIcon.setAttribute("src","images/edit.png");

    childDiv.appendChild(inp);
    childDiv.appendChild(deleteIcon);
    childDiv.appendChild(editIcon);

    div.appendChild(span);
    div.appendChild(childDiv);
    document.getElementsByClassName("container")[0].appendChild(div);
     
}

function removeTask(task){

  document.getElementsByClassName('container')[0].removeChild(task);
  if(  document.getElementsByClassName("container")[0].hasChildNodes()){
    document.getElementsByClassName("container")[0].style.display="flex";
  }
  else{
    document.getElementsByClassName("container")[0].style.display="none";
  }
}
function editTask(task){
  console.log(task);
  document.getElementsByClassName('edit-task')[0].style.display="flex";
    task.setAttribute("closed","false");

document.getElementById("cross").addEventListener("click",function(){
  document.getElementsByClassName('edit-task')[0].style.display="none";
  task.setAttribute("closed","true");
});

 document.getElementById("edit").addEventListener('click',function(){
  if(task.getAttribute("closed")=="false")
    task.innerHTML=document.getElementById("newtask").value;
  });
}


