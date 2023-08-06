function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controls = document.querySelector('#controls');
const input = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector('#boxes');

input.addEventListener("change",handInput);
 function handInput (e){
    const namberEl = e.currentTarget.value;
    if (namberEl > 0 && namberEl <= 100){
      console.log(namberEl);}
      else{
      alert("Введіть число від 1 до 100");
      e.currentTarget.value="";
      input.addEventListener("change",handInput); 
    }
  }

  btnCreate.addEventListener('click', onClickCreate);
  function onClickCreate(){
    
    
  }
       
     
   



   /* input.addEventListener("change",handInput);
 function handInput (e){
    const namberEl = e.currentTarget.value;
    if (namberEl < 1 || namberEl > 100){
      alert("Введіть число від 1 до 100");
      e.currentTarget.value="";
      console.log(namberEl);
    }
    console.log(namberEl);
  }
    input.addEventListener("change",handInput);    
     
    
  /* input.addEventListener('focus',onInputFocus);
 function onInputFocus(){
  console.log("F");
  if (namberEl < 1 && namberEl > 100){
    alert("Введіть число від 1 до 100"); 
  }
};*/
 

 