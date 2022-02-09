const input = document.getElementById("ipbox")
const list = document.getElementById("list");
const LINETHROUGH = "lineThrough";


const dateElement = document.getElementById("date");
//setting date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);


//Variables declare
var LIST=[];
var id=0;


//get list from local storage
var data = localStorage.getItem('TODOLST');


//check if data is empty
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
} else {
    LIST = [];
    id = 0;
}


function loadList(array) {
    array.forEach(function (listitem) {
        console.log(listitem.name, listitem.id, listitem.done, listitem.trash);
        addTodo(listitem.name, listitem.id, listitem.done, listitem.trash); 
    });
}


//addToDo function needs to be called when entered a new item or to load items from local storage
function addTodo(todo,id,done,trash) {
    if (trash) { return };
    const DONE = done ? "checked" : "";
    const LINE = done ? "lineThrough" : "";  //'style="text-decoration:line-through;"'
    const item = `<li class="item" id="${id}" >         
            <input class ="checkbox" type="checkbox" onchange="completeToDo(this)" ${DONE}  />
            <p class="text ${LINE}" > ${todo} </p>
            <input type="button" class ="delbutton" value="Delete" onclick="removeToDo(this)" />
        </li>`;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
    
}


function AddButton() {
    const todo = input.value;
    if (todo) {
        addTodo(todo, id, false, false);
        // addTodo("Coffeeee", true, false);
        LIST.push({name: todo, id: id, done: false, trash: false});
        //add to localStorage
        localStorage.setItem('TODOLST', JSON.stringify(LIST));
        id = id + 1;
        input.value = "";
    }
    
}


function completeToDo(element) {
    if (element.checked == true) {
        //console.log("hello hri")
        element.parentNode.querySelector(".text").classList.add("lineThrough");
        LIST[element.parentNode.id].done = true;
    }
    else {
        element.parentNode.querySelector(".text").classList.remove("lineThrough");
        LIST[element.parentNode.id].done = false;
    }
    //add to localStorage
    localStorage.setItem('TODOLST', JSON.stringify(LIST));
}


//function to delete an item
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.parentNode.id].trash = true;
    //add to localStorage
    localStorage.setItem('TODOLST', JSON.stringify(LIST));
}