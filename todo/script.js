let sub = document.getElementById("sub");
let title = document.getElementById("title");
let desc= document.getElementById("desc")
let todo=document.getElementById("todo");

const refreshtodo=()=>{
  // function refreshtodo(){
    todo.innerHTML=``;
    for(let i=0; i< localStorage.length; i++){
      let key=localStorage.key(i);
      let value= localStorage.getItem(key);
      todo.innerHTML+=`
      <div id=${key}>
      <h1>${key}</h1>
      <h2>${value}</h2>
      <button id=${key}-dlt>Delete</button>
      </div>`;
    }
  }
let deletebtn=(event)=>{
  if(event.target.nodeName==='BUTTON'){
    let element=(document.getElementById(event.composedPath()[0].id)).parentElement
    // console.log(event.composedPath()[0].id)
    element.remove();
    localStorage.removeItem(element.id)
  }
}


sub.addEventListener("click", (event)=>{      //event listener for main submit button
  localStorage.setItem(`${title.value}`, `${desc.value}`)
  title.value=``;
  desc.value=``;
  refreshtodo();
})

todo.addEventListener("click", (event)=>{ // event listener for all delete buttons
  deletebtn(event)
})


refreshtodo();