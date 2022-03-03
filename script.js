const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

const birthday = "03 Oct 2022";

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const totalSeconds = (birthdayDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = (hours);
    minsEl.innerHTML = (mins);
    secsEl.innerHTML = (secs);
}

//This calls the function above
countdown();

//This counts downs every 1000 milliseconds
setInterval(countdown, 1000);