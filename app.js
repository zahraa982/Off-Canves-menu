
const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const  conentEl = document.querySelector(".content");
const hamburgerBarsEl=document.getElementsByTagName("span");
console.log(hamburgerBarsEl) //just to be sure they are there.


function toggelnav(){
navTriggerEl.addEventListener("click", function(){
navEl.classList.toggle("open");
conentEl.classList.toggle("shift");
animateHhamburgers();

});

}

function animateHhamburgers(){
for (let item of hamburgerBarsEl){
item.classList.toggle("change");

}

}

toggelnav();

