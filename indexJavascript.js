
var name1 = document.getElementById("nameText");
var des = document.getElementById("desText");
var joining= document.getElementById("joiningText");
var age = document.getElementById("ageText");

//var form = document.getElementById("mainform");
document.getElementById("mainform").style.display = "none"

function addnew() {
    document.getElementById("mainform").style.display = "Block"
    document.getElementById("addbut").style.display = "none"
}

function onCancel() {
    document.getElementById("mainform").style.display = "none"
    document.getElementById("addbut").style.display = "Block"
}

function onClear() {
    name1.value = "";
    des.value = "";
    joining.value = "";
    age.value = "";
}



function sub() {
    if(name1.value=="" || des.value=="" || joining.value==""|| age.value==""){
        alert("Please enter all values!");
} else{
    var item = `<tr>
                    <td> ${name1.value} </td>
                    <td> ${des.value} </td>
                    <td> ${joining.value} </td>
                    <td> ${age.value} </td>
                    <td> <input type="button" value="Delete" onclick="onDelete(this)"/> </td>
                    </tr>`
    document.getElementById("newdata").insertAdjacentHTML("beforeend", item);

    name1.value = "";
    des.value = "";
    joining.value = "";
    age.value = "";
    }

}

function onDelete(element) {
    element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode);
}