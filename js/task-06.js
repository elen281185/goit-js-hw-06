const passwordInput = document.querySelector("#validation-input");

passwordInput.addEventListener('blur',onInputBlur);


function onInputFocus(){
    console.log("focus")
};
function onInputBlur(e){

    let leng=e.target.value.length;
    console.log(leng);
    if (leng == 6){
      passwordInput.classList.add("valid");
      passwordInput.classList.remove("invalid");
    }
    else {passwordInput.classList.add("invalid");
          passwordInput.classList.remove("valid");}
}
