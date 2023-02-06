// SELECTORS
const submitBtn = document.querySelector(".btn");
const inputEmail = document.getElementById("email");
const errorParagraph = document.querySelector(".error-paragraph");
const errorIcon = document.querySelector(".error-icon");

const emailPattern =  "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";

// function to validate email
function validateEmail(e) {
    e.preventDefault();
    console.log("I have been clicked");
    console.log(inputEmail.value);
    let  emailInput = inputEmail.value;

    if(!emailInput.match(emailPattern) || emailInput === "") {
        errorParagraph.style.display = "block";
        errorIcon.style.display = "block";
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