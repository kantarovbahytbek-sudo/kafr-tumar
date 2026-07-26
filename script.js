// Плавная прокрутка

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({

behavior:'smooth'

});

});

});


// Анимация появления

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".food-card,.card,.gallery img,.banquet-content").forEach(el=>{

observer.observe(el);

});


// Кнопка вверх

const btn=document.createElement("button");

btn.innerHTML="↑";

btn.id="topBtn";

document.body.appendChild(btn);

window.addEventListener("scroll",()=>{

btn.style.display=window.scrollY>500?"block":"none";

});

btn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
