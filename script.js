const formReg = document.getElementById('registrationForm')
const userName = document.getElementById('username')
const userNameError = document.getElementById('usernameError')
const userEmail = document.getElementById('email')
const userEmailError = document.getElementById('emailError')
const userPassword = document.getElementById('password')
const userPassError = document.getElementById('passwordError')
const confirmPassword = document.getElementById('confirmPassword')
const confPassError = document.getElementById('confirmPasswordError')


let localDB = []

formReg.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.classList.contains('submitBtn')) {
        let valid = true
        if (!userName.value) {
            checkValidation(userName, userNameError);
            valid = false
        } else {
            userNameError.textContent = ''
            userNameError.style.display = 'none'
        }
       
        if (!userEmail.value || !validateEmail(userEmail.value)) {
            checkValidation(userEmail, userEmailError);
            valid = false;
        } else {
            userEmailError.textContent = '';
            userEmailError.style.display = 'none';
        }

        if (!userPassword.value) {
            checkValidation(userPassword, userPassError)
            valid = false;
        } else {
            userPassError.textContent = ''
            userPassError.style.display = 'none'
        }
       
        if (!confirmPassword.value || userPassword.value !== confirmPassword.value) {
            checkValidation(confirmPassword, confPassError)
            valid = false
        } else {
            confPassError.textContent = ''
            confPassError.style.display = 'none'
        }
        if (valid) {
            localDB.push(`{'name':${userName.value}, 'email': ${userEmail.value}, 'password': ${userPassword.value}}`)
            cleanUp()
        }
        console.log('localDB ' + localDB)
    }
})
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function displayErrorMessage(){

}
function checkValidation(inputElement, errorElement) {
    let message = inputElement.validationMessage;
    
    if (inputElement.validity.valueMissing) {
        message = 'This field is required';
    } else if (inputElement.type === 'email' && inputElement.value && !validateEmail(inputElement.value)) {
        message = 'Please enter a valid email address.';
    } else if (inputElement.validity.tooShort) {
        message = `Password must be at least ${inputElement.minLength} characters long.`;
    } else if (inputElement.id === 'confirmPassword' && inputElement.value !== userPassword.value) {
        message = 'Passwords do not match';
    }
    errorElement.textContent = message;
    errorElement.style.display = message ? 'block' : 'none';
}
function cleanUp(){
    userName.value=''
    userEmail.value=''
    userPassword.value=''
    confirmPassword.value=''
}


