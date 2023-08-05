
const btn = document.querySelector(".change-color");
const text = document.querySelector(".color");
const body = document.body;

btn.addEventListener('click',chengeColor);
function chengeColor (){
text.textContent=document.body.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}