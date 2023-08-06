const passwordInput = document.querySelector("#validation-input");

passwordInput.addEventListener('blur',onInputBlur);


function onInputFocus(){
    console.log("focus")
};
function onInputBlur(e){

    let leng=e.target.value.length;
    const number = Number(passwordInput.getAttribute('data-length'));
    if (leng === number){
      passwordInput.classList.add("valid");
      passwordInput.classList.remove("invalid");
    }
    else {passwordInput.classList.add("invalid");
          passwordInput.classList.remove("valid");}
}
