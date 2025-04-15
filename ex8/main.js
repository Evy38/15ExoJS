let btn = document.getElementById("btn");
let snackbar = document.getElementById("snackbar");

btn.addEventListener("click", function () {

    snackbar.style.visibility = "visible";

    setTimeout(function () {
        snackbar.style.display = "none";
    }, 3000);
});