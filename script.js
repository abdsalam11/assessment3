
// const error = document.getElementById("errorMsg");
document.getElementById("submitBtn").addEventListener("click", submitForm);
document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
});


// Must not be empty and contain at least 2 words.

  function checkFullname() {
    let name = document.getElementById("fullname").value.trim();

    if (name === "") {
        alert("Name cannot be empty.");
    } 
    else if (name.length < 2) {
        alert("Name must be at least 2 characters.");
    }
    else {
        console.log(name)
    }
}
checkFullname()


// check if email is valid

function checkEmail() {
    let email = document.getElementById("email").value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("Email cannot be empty.");
    } 
    else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
    }
    else {
        console.log(email)
    }
}

checkEmail()

// check for password and confirm password


function checkPassword() {
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    

    if (password === "") {
        alert("please enter passsword");
    }
    else if (!passwordRegex.test(password)) {
        alert("Password must be at least 6 characters, include 1 uppercase letter, 1 number, and 1 special character (!@#$%^&*).");
    }
    else if (confirmPassword === "") {
        alert("confirm password again")
    }
    else if (password !== confirmPassword) {
        alert("confirm password again")
    }
    else {
        console.log("password")
    }

}

checkPassword()

// check if age is greater than 18

function checkAge() {
    let age = document.getElementById("age").value.trim();

    if (age === "") {
        alert("please select your age")
    }
    else if (age < 18) {
        alert("age must be greater than 18")
    }
    else {
        console.log(age)
    }
}

checkAge()


function submitForm(){
    checkFullname()
    checkEmail()
    checkPassword()
    checkAge()
}