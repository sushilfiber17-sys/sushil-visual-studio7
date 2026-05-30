function searchPDF(){

let input=
document.getElementById("search")
.value.toLowerCase();

let cards=
document.getElementsByClassName("card");

let count=0;

for(let i=0;i<cards.length;i++){

let text=
cards[i].innerText.toLowerCase();

if(text.includes(input)){

cards[i].style.display="";

count++;

}
else{

cards[i].style.display="none";

}

}

document.getElementById("resultCount").innerText=

count===0
? "No Results Found"
: `${count} Results Found`;

}

function toggleFAQ(btn){
let p=btn.nextElementSibling;
p.style.display=(p.style.display==="block")?"none":"block";
}
function toggleTheme(){

document.body.classList.toggle("dark-mode");

let btn=document.getElementById("themeBtn");

if(document.body.classList.contains("dark-mode")){

btn.innerHTML="☀️ Light Mode";

}
else{

btn.innerHTML="🌙 Dark Mode";

}

}
window.onscroll=function(){

let btn=document.getElementById("topBtn");

if(document.documentElement.scrollTop>200){

btn.style.display="block";

}else{

btn.style.display="none";

}

}

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
function filterCards(category){

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let text=card.innerText.toLowerCase();

if(category==="all"||

text.includes(category)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

}
window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/height)*100;

document.getElementById("progressBar").style.width=progress+"%";

});
/* SAVE THEME */

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark-mode");

document.getElementById("themeBtn")
.innerHTML="☀️ Light Mode";

}

const oldToggle = toggleTheme;

toggleTheme = function(){

oldToggle();

if(document.body
.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

}else{

localStorage.setItem("theme","light");

}

}
/* ACTIVE NAVBAR */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".navbar ul li a"
);

window.addEventListener(
"scroll",
()=>{

let current="";

sections.forEach(section=>{

const top=
section.offsetTop-150;

if(
pageYOffset>=top
){
current=section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.style.color="white";

if(
link.getAttribute("href")
===`#${current}`
){
link.style.color="#38bdf8";
}

});

});