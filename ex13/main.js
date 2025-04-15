const salut = document.getElementById('title');// recup balise du text qui changera

let count = 0; // commence le compteur à 0

//fonction qui abriteras la boucle
function changeTitle() {

  count++;// passer au message suivant 

  if (count === 1) {
    salut.innerText = "Comment ça va ?";
  } else if (count === 2) {
    salut.innerText = "Bienvenue !";
  } else if (count === 3) {
    salut.innerText = "Amuse-toi bien !";
  } else {
    salut.innerText = "Salut !";
    count = 0;
  }
}

setInterval(changeTitle, 3000); // appel de notre fonction de boucle toute les 3s
