let btn = document.getElementById('btn');
let result = document.getElementById('result');

btn.addEventListener('click', function () {
    let random = Math.random() ;
    if(random >= 0.5){
        result.innerHTML = "Heads";
    }else{
        result.innerHTML = "Tails";
    }
    console.log(random + ':' + result.innerHTML);
});

