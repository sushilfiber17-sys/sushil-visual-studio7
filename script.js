function searchPDF(){
let input=document.getElementById("search").value.toLowerCase();
let cards=document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){
let text=cards[i].innerText.toLowerCase();
cards[i].style.display=text.includes(input)?"":"none";
}
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