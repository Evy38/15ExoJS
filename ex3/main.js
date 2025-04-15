const input = document.getElementById('input');
const display = document.getElementById('display');
const checkbox = document.getElementById('checkbox') ;


checkbox.addEventListener("click", function() {
    if(input.type == "password"){
        input.type = "text";
    }else{
        input.type = "password";
    }
    console.log("test")
})