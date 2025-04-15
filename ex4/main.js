let password = document.getElementById("password");
let checkPassword = document.getElementById("checkpassword");
let alert = document.getElementById("message");


checkPassword.addEventListener('keyup', () => {

    while (checkPassword.value !== password.value) {
      alert.textContent = "The passwords entred don't match";
      alert.style.color = "red"; 
      console.log("test")
      break;
    }
    
})
