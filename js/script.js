// Variables
const form = document.querySelector("#form");
const regexmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

// Form validation
form.addEventListener("submit", function (event) {
  
    // Constant fields to select every inputs, and selects except checkbox type
    const fields = form.querySelectorAll('input:not([type="checkbox"]), select');

    // Constants password and confirmPassword to ensure the password introduced by user matches
    const password = document.querySelector("#passwd");
    const confirmPassword = document.querySelector('#confirmPassword');

    // Flag variable to track down if the form is valid or not. Mainly set up in true value
    var isValid = true;

    // Iterating each field of the form
    fields.forEach(field => {
    
        const errorDiv = field.nextElementSibling;

        // Cleans all error messages.
        field.classList.remove("error");
        errorDiv.textContent = "";

        // Validates and shows an error if any field of the form is empty
        if (!field.value) {
            field.classList.add("error");
            errorDiv.textContent = "This field is required";
            isValid = false;
        }

        // Checks if the email field has or not a valid email address
        if (field.type === "email" && !regexmail.test(field.value)) {
            field.classList.add("error");
            errorDiv.textContent = "Please enter a valid email address";
            isValid = false;
        }

        // Validates if the password matches
        if (field === confirmPassword && password.value !== confirmPassword.value) {
            field.classList.add('error');
            errorDiv.textContent = 'Passwords do not match';
            isValid = false;
        }

    });

    // Constants related to terms checkbox
    const terms = document.querySelector("#terms");
    const termsLabel = terms.closest("label");
    const termsError = termsLabel.nextElementSibling;

    // Clean error messages at terms checkbox by default
    termsLabel.classList.remove("error");
    termsError.textContent = "";

    // Validates if the terms checkbox are marked
    if (!terms.checked) {
        termsLabel.classList.add("error");
        termsError.textContent = "You must accept the terms";
        isValid = false;
    }

    // Prevents form submit if there are errors
    if (!isValid) {
        event.preventDefault();
    }

});