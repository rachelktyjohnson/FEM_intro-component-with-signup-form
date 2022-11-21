const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");


function toggleError(error, element){
    //error is a Boolean to say if there is an error or not
    if (error){
        //turn on error hints
        element.classList.add('error');
        element.nextElementSibling.style.display="block";
        element.nextElementSibling.nextElementSibling.style.display="block";
    } else {
        //turn off error hints
        element.classList.remove('error');
        element.nextElementSibling.style.display="none";
        element.nextElementSibling.nextElementSibling.style.display="none";
    }
}

function validateFirstName(){
    if(firstName.value !== ""){
        toggleError(false, firstName);
        return true;
    } else {
        toggleError(true, firstName);
        return false;
    }
}

function validateLastName(){
    if(lastName.value !== ""){
        toggleError(false, lastName);
        return true;
    } else {
        toggleError(true, lastName);
        return false;
    }
}

function validatePassword(){
    if(password.value !== ""){
        toggleError(false, password);
        return true;
    } else {
        toggleError(true, password);
        return false;
    }
}


function validateEmail(){
    let email_pattern = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(email_pattern.test(email.value)){
        toggleError(false, email);
        return true;
    } else {
        toggleError(true, email);
        return false;
    }
}

form.addEventListener('submit', (e)=>{
    let allValid = true;
    allValid *= validateFirstName()
    allValid *= validateLastName()
    allValid *= validateEmail()
    allValid *= validatePassword()
    if (!allValid){
        e.preventDefault();
    }
})