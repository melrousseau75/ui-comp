import $ from "jquery";
import "../../style.scss";
import "./form-text.scss";


function validateInput(value) {
    var inputField = document.getElementById('username');
    var errorMessage = document.getElementById('error-message');

    //example of validation (validation can be done with tiers libraries)
    if (value.length >= 6) {
        inputField.classList.remove('error');
        inputField.classList.add('valid');
        errorMessage.textContent = '';
    } else {
        inputField.classList.remove('valid');
        inputField.classList.add('error');
        errorMessage.textContent = 'text must be at least 6 characters long.';
    }
}