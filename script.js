function showTab(tabId){

document
.querySelectorAll(".tab")
.forEach(tab=>{
tab.classList.remove("active");
});

document
.getElementById(tabId)
.classList.add("active");

}

const eventDate =
new Date("September 26, 2026 17:00:00").getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = eventDate - now;

const days =
Math.floor(distance/(1000*60*60*24));

const hours =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes =
Math.floor((distance%(1000*60*60))/(1000*60));

const seconds =
Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

},1000);