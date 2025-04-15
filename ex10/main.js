let check = document.getElementById("check");

check.addEventListener("click", function () {
    let year = document.getElementById("year").value;
    let result = document.getElementById("result");

    if (year % 4 === 0) {
        result.innerHTML = "C'est une année bissextile."
    } else {
        result.innerHTML = "Ce n'est pas une année bissextile."
    };

}
);