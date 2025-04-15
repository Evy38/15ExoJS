var logo = document.getElementById('logo');
var value = 0;


    const boucle = setInterval(() => {

        console.log("hello toute les 10 ms");

        value++;
        logo.style.width = value + "px";
        logo.style.height = value + "px";

        console.log(`le taille est de ${value}`)
        
        if(value >= 240){
            clearInterval(boucle); //arrête la boucle lancée par setIntervale
            console.log("stop");
        }

    }, 10)




