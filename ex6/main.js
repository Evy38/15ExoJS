let convert = document.getElementById("convert");
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

const secInY = secondsInMinute * minutesInHour * hoursInDay * daysInYear;
const minInY = minutesInHour * hoursInDay * daysInYear;
const hInY = hoursInDay * daysInYear

convert.addEventListener("click", () => {
    let numberOfYears = document.getElementById("numberOfYears").value;

    let resultSecondes = document.getElementById("resultSeconds");
    let resultMinutes = document.getElementById("resultMinutes");
    let resultHours = document.getElementById("resultHours");
    let resultDays = document.getElementById("resultDays");

    resultSecondes.innerHTML = numberOfYears * secInY + "secondes";
    resultMinutes.innerHTML = numberOfYears * minInY + "minutes";
    resultHours.innerHTML = numberOfYears * hInY + "heures";
    resultDays.innerHTML = numberOfYears * daysInYear + "jours";


    console.log(secInY, "secondes");
    console.log(minInY, "minutes");
    console.log(daysInYear, "heures")

});
