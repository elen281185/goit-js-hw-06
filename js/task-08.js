const form = document.querySelector(".login-form");

form.addEventListener('submit',onFormSabmit);

function onFormSabmit (event){
event.preventDefault();

const formData = new FormData(event.currentTarget); 
const email = form.elements.email.value;
const password = form.elements.password.value;
if(!email || !password)
{
alert("Всі поля повинні бути заповнені");

}
 else{
   /* formData.forEach((value, name)=> {
    console.log (name, ` -> `, value, );});
    form.reset();*/
    console.log({ email, password });
    form.reset();    
    }
}

/*
const formElements = event.currentTarget.elements;
console.dir(formElements);
const mail = formElements.email.value;
const password = formElements.password.value;

console.log(mail, password);

}

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
*/