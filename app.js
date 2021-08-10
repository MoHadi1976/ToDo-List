const inputValue = document.getElementById("input");
const submit = document.getElementById("submit");
const deleteList = document.getElementById("clear");
const ToDoList = document.getElementById("my-list");

let toDoItem = document.getElementsByTagName("li");

submit.addEventListener("click", () =>{
let newValue = document.createElement("li");
newValue.innerHTML = `${inputValue.value}`;
ToDoList.appendChild(newValue);
inputValue.value = "";
})
for (let i=0; i<toDoItem; i++){
    let currentToDoItem = toDoItem[i];
    currentToDoItem.addEventListener("click", ()=>{
        if (currentToDoItem.classList.length===0){
            currentToDoItem.classList.add("done");
            }else{
                currentToDoItem.classList.remove("done");
            }
    })
}
deleteList.addEventListener("click", ()=>{
    ToDoList.innerText="";
})