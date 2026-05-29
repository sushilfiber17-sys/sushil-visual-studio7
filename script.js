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