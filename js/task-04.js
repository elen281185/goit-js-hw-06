
let counterValue=0;

const btnDiff = document.querySelector ('#btnDiff');
const btnSum = document.querySelector ('#btnSum');

btnDiff.addEventListener('click',() =>{
    counterValue= counterValue - 1;
    console.log("hello", counterValue);

    const value = document.querySelector('#value')
    value.textContent = counterValue;
    
})
btnSum.addEventListener('click',() =>{
    counterValue= counterValue + 1;
    console.log("hello", counterValue);
    
    const value = document.querySelector('#value')
    value.textContent = counterValue;
})

