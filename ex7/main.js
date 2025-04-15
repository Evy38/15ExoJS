let loading = document.getElementById("loadingAnimation");
let content = document.getElementById("displayContent");


setTimeout(function () {

    loading.style.display = "none";
    content.style.display = "block";

    console.log("hello");
}, 3000);