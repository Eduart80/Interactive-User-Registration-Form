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

formReg.addEventListener('click',(event)=>{
    event.preventDefault()
    if(event.target.classList.contains('submitBtn')){
    let name = userName.value
    let email = userEmail.value
    let pass = userPassword.value
    let confPass = confirmPassword.value
    if(pass === confPass){
        localDB.push(`{'name':${name}, 'email': ${email}, 'password': ${pass}}`)
    }else{
        return 
    }
        cleanUp()
    }
    console.log('localDB '+ localDB);
    
})
function displayErrorMessage(){

}
function checkValidation(){
    let message = inputElement.validationMessage
    if(inputElement.validity.valueMissing){
        message= 'This field is required'
    }else if(inputElement.validity.tooShort){
        message = `Password must be al least ${inputElement.minLength} charactes long.`
    }
    
}
function cleanUp(){
    userName.value=''
    userEmail.value=''
    userPassword.value=''
    confirmPassword.value=''
}


