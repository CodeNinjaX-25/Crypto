// Fetching the form data
var params = new URLSearchParams(window.location.search);
// UrlParameters
var firstNameparams = params.get('firstName');
var lastNameparams = params.get('lastName');
var emailparams = params.get('email');
var passwordparams = params.get('password')
var userNameparams = params.get('userName')
var confirmPasswordparams = params.get('Confirmpass')

// Varibales for Form Validation
let firstName = document.getElementById("Fname");
let lastName = document.getElementById("Lname");
let userName = document.getElementById("nickname");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let confirmPassword = document.getElementById("Cpass");

let submitForm = ()=>{
    // Form Validation Process
   
    if(firstName.value == "" || lastName.value == "" || userName.value == "" || email.value == "" || password.value == "" || confirmPassword.value == ""){
        alert("Please fill in all fields");
    }
    else if(password.value!= confirmPassword.value){
        alert("Passwords do not match");
        event.preventDefault();
    }
    else if(password.value.length < 8){
        alert("Password must be at least 8 characters long");
        event.preventDefault();
    }
    else if(password.value.length > 20){
        alert("Password must be less than 20 characters long");
        event.preventDefault();
    }
    else if(userName.value.length < 8){
        alert("Username must be at least 8 characters long");
        event.preventDefault();
    }
    else{
        alert("Registration Successful. Taking You To Your Dashboard....");
    }

}

    // Filling in the dashboard will form informations
document.getElementById("userName").textContent = userNameparams;
document.getElementById("fnameInfo").textContent = `First Name : ${firstNameparams}`
document.getElementById("lnameInfo").textContent = `Last Name : ${lastNameparams}`
document.getElementById("emailinfo").textContent = `Email : ${emailparams}`
document.getElementById("passinfo").textContent = `Password : ${passwordparams}`




