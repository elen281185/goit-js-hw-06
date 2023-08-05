const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('focus',onInputFocus);
nameInput.addEventListener('blur',onInputBlur);
/*nameInput.addEventListener('change',onInputChange)*/
nameInput.addEventListener('input',onInputChange);

function onInputFocus(){
    console.log("focus")
};
function onInputBlur(){
    console.log("blur")
};

function onInputChange(event){
    console.log(event.currentTarget.value);
    nameOutput.textContent = event.currentTarget.value;
    if (nameOutput.textContent.length<1){
    nameOutput.textContent="Anonymous";  
    }
   
};


