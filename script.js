let inputbox = document.getElementById("input-box");
let listcont = document.getElementById("list-container");

function addTask() {
    if (inputbox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcont.appendChild(li); // Corrected this line
        inputbox.value = ''; // Clear the input field after adding the task
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputbox.value ='';   
    saveData();

}

listcont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(  e.target.tagName === "SPAN"  ){
        e.target.parentElement.remove()
        saveData();
    }
},false )



function saveData(){
    localStorage.setItem("data", listcont.innerHTML)
}

function showList(){
    listcont.innerHTML = localStorage.getItem("data");
}
showList();