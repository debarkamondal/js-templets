let submitbtn = document.getElementById("submitbtn");
let deletebtn = document.getElementById("deletebtn");
submitbtn.addEventListener("click", (event)=>{
//   e.preventDefault();
  let desc = document.getElementById("desc");
  let title = document.getElementById("title");
  localStorage.setItem(`${title.value}`, `${JSON.stringify(desc.value)}`);
  // localStorage.setItem("Description", `${JSON.stringify(desc.value)}`);
  todo.innerHTML+=`
  <h1>${title.value}</h1>
  <h2>${desc.value}</h2>
  <button id=${title.value}>Delete</button>`
  document.getElementById(`${title.value}`).addEventListener("click", (event, ${title.value})=>{
    this.innerHTML=''
    localStorage.removeItem(`${title}`)
    console.log(`${title}`)
  })
  // title.value=``
  // desc.value=``

});
