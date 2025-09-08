//input behavior
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    //clear input field after adding task
    inputBox.value = "";
    saveData();
}

//triggers addTask() when pressing Enter inside the input-box
inputBox.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        addTask();
    }
}); 

//to checked or delete task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//to save the lists
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//display the lists (data) when open the website again
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");  
}
showList();