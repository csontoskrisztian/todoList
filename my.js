// Változók

//Elemek
let checkbox_CheckAll = document.getElementById("input_check_all");
let button_DeleteChecked = document.getElementById("button_delete_checked");
let input_Add = document.getElementById("input_add");
let button_Add = document.getElementById("button_add");
let div_ListBox = document.getElementById("listBox");

//Feliratkozás
$(document).ready(function(){
    ReadIn();
});

checkbox_CheckAll.addEventListener("change", OnChange_CheckAll);

button_DeleteChecked.addEventListener("click", OnClick_DeleteChecked);

button_Add.addEventListener("click", OnCLick_AddNew);

//Eseménykezelők
function ReadIn() {
    $.ajax({
        url: "teendok.json",
        method: "get",
        datatype: "JSON",
        success: function(data){
            new List(div_ListBox, data);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function OnChange_CheckAll(){
    let event = new CustomEvent("checkAll", {detail: this.checked});

    window.dispatchEvent(event);
}

function OnClick_DeleteChecked() {
    let event = new Event("deleteChecked");

    window.dispatchEvent(event);
}

function OnCLick_AddNew() {
    let newTask = input_Add.value;
    input_Add.value = "";

    let event = new CustomEvent("addNew", {detail: newTask});

    window.dispatchEvent(event);
}

//Függvények