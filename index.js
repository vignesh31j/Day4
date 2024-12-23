function validateSignup() {
    
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value;
    const emailPatten = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    let usernamefeedback =document.getElementById('usernamefeedback').value;
    let emailfeedback =document.getElementById('emailfeedback').value;
    let passwordfeedback =document.getElementById('passwordfeedback').value;
    let confirmpasswordfeedback =document.getElementById('confirmpasswordfeedback').value;

    let errorMessage = document.getElementsByClassName('error');
    while(errorMessage.length > 0){
        errorMessage[0].remove();
    }

    let isValid = true;
    if(true){
        if(username === ""){
            usernamefeedback.innerHTML="Username is required";
            isValid = false;
        }
        else if(username.length < 4){
            displayError('username' , "Username must be at least 4 characters long");
            isValid = false;
        }
        else if(username.length > 15){
            displayError('username' , "Username must not be more than 15 characters");
            isValid = false;
        }
        else if(!/[a-z]/.test(username)){
            displayError('username' , "Username must have at least one lowercase letter");
            isValid = false;
        }
        else if(!/[A-Z]/.test(username)){
            displayError('username' , "Username must have at least one uppercase letter");
            isValid = false;
        }
        else if(!/[0-9]/.test(username)){
            displayError('username' , "Username must have at least one digit");
            isValid = false;
        }
        else if(/[!#%^&*()+-=;:"'<>,.]/.test(username)){
            displayError('username' , "Username must not have any special characters (!, #, %,^,&,*,(,),+,-,=,;,:,',.)");
        }
    }

    if(true){
        if(email.trim() === ""){
            displayError('email' , "Email is required");
            isValid = false;
        }
        else if(!emailPatten.test(email)){
            displayError('email' , "Please enter a valid email");
            isValid = false;
        }
    }

    if(true){
        if(password.trim() === ""){
            displayError('password' , "Password is required");
            isValid = false;
        }
        else if(password.length < 6){
            displayError('password' , "Password must be at least 6 characters");
            isValid = false;
        }
        else if(password.length > 20){
            displayError('password' , "Password must not be more than 20 characters");
            isValid = false;
        }
        else if(!/[a-z]/.test(password)){
            displayError('password' , "Password must have at least one lowercase letter");
            isValid = false;
        }
        else if(!/[A-Z]/.test(password)){
            displayError('password' , "Password must have at least one uppercase letter");
            isValid = false;
        }
        else if(!/[0-9]/.test(password)){
            displayError('password' , "Password must have at least one digit");
            isValid = false;
        }
        else if(!/[@$_]/.test(password)){
            displayError('password' , "Password must have at least one special character (@, $,_)");
            isValid = false;
        }
        else if(/[!#%^&*()+-=;:"'<>,.]/.test(password)){
            displayError('password' , "Password must not have any special characters (!, #, %,^,&,*,(,),+,-,=,;,:,',.)");
        }

    }
   

    if(true){
        if(confirmPassword.trim() === ""){
            displayError('confirmPassword' , "Confirm Password is required");
            isValid = false;
        }
        else if(confirmPassword !== password){
            displayError('confirmPassword' , "Passwords do not match");
            isValid = false;
        }
    }

    return isValid;

    function displayError(id , message){
        let feild = document.getElementById(id);
        let error = document.createElement('div');
        error.classList.add('error')
        error.innerHTML = message;
        feild.parentElement.appendChild(error);
    }
}