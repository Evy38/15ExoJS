let player = document.getElementById('player');
let moveSize = 10;
let moveCount = 0;

document.addEventListener('keydown', (event) => {

  let currentTop = player.offsetTop;
  let currentLeft = player.offsetLeft;

  if (event.code == 'ArrowUp') {
    console.log(event.code);
    player.style.top = currentTop - moveSize + "px";
    player.style.backgroundImage = url("img/walk.png");

  } else if (event.code == 'ArrowDown') {
    player.style.top = currentTop + moveSize + 'px';
    player.style.backgroundImage = "url('img/walk.png')"; 

  } else if (event.code == 'ArrowLeft') {
    player.style.left = currentLeft - moveSize + 'px';
    player.style.backgroundImage = "url('img/walk.png')"; 

  } else if (event.code == 'ArrowRight') {
    player.style.left = currentLeft + moveSize + 'px';
    player.style.backgroundImage = "url('img/walk.png')"; 

  }
});
// Abandon de l'exercice