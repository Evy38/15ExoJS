window.onscroll = function () { scrollIndicator() };// quand la page est scrollée lance la fonction

function scrollIndicator() {

    let windowScroll = document.documentElement.scrollTop; //distance scollée depuis le haut
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;// hauteur total scrollable
    let scrolled = (windowScroll / height) * 100; //clcule du pourcentage
    document.getElementById("bar").style.width = scrolled + "%";

}