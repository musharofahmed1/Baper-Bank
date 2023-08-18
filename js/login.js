//step-1
//add click event handler with submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2
    //get email address inside email field
    //always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value; 
    //step-3
    //get password
    // set id on the html element
    //get the element 
    //get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //DANGER: Don not verify email and password on the client site
    //Verify Email And Password
    if(email==='sontan@gmail.com' && password=== 'secret'){
        window.location.href = 'home.html';
    }
    else{
        alert('Invalid Username Or Password');
    }
})