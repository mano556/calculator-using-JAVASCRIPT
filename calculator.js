let caldisplay=document.getElementById("output-screen");


function display(num){
    caldisplay.value += num;
    
}
function calculate(){
    try{
        caldisplay.value = eval(caldisplay.value);
    }
    catch(error)
    {
        alert("Invalid")
    }
}

function clr() {
    caldisplay.value = '';
}
function del(){
    caldisplay.value = caldisplay.value.slice(0,-1);
}

