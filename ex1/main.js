const myBtn = document.getElementById('myBtn');
const cnyClic = document.getElementById('ctnClic');
let nbClic = 0;

myBtn.addEventListener('click', () => {
    console.log(`Vous avez cliqué ${nbClic} fois.`);
    nbClic ++
})