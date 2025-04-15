let villes = ["Bordeaux", "Nantes", "Lyon", "Marseille",
    "Monptellier", "Paris", "Rennes", "Strasbourg"];

let distance = [950, 850, 450, 800, 1000, 460, 840, 0];

let check = document.getElementById("check-distance");
let btn = document.getElementById("btn");
let dist = null;

btn.addEventListener('click', () =>{
    dist = check.value;

    for (let i=0; i<villes.length ; i++){
        if (dist>=distance[i]){
            document.write("ville atteinte : " + villles[i] + "<br>")
        }
    }
});