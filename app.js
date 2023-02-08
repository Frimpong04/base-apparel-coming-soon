// SELECTORS
const submitBtn = document.querySelector(".btn");
const inputEmail = document.getElementById("email");
const errorParagraph = document.querySelector(".error-paragraph");
const errorIcon = document.querySelector(".error-icon");



function isEmailValid(email) {
    let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return reg.test(email);
}


function validateEmail() {
    // e.preventDefault();
    console.log("clicked");
    console.log(inputEmail.value);
    if(isEmailValid(inputEmail.value)) {
        return;
    } else {
        errorParagraph.style.display = "block";
        errorIcon.style.display = "block";
        console.log("Invalid email");
        setTimeout(() => inputEmail.value = "", 1000);
    }
    

}



function removeErrorMessage() {
    console.log("error cleared");
    errorParagraph.style.display = "none";
    errorIcon.style.display = "none";
}

//EVENT LISTENERS
submitBtn.addEventListener("click", validateEmail);
inputEmail.addEventListener("focus", removeErrorMessage);