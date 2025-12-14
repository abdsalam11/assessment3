// Get form and input elements
let registrationForm = document.getElementById("registrationForm");
let fullnameInput = document.getElementById("fullname");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirmPassword");
let ageInput = document.getElementById("age");

// Add event listener to the submit button
document.getElementById("submitBtn").addEventListener("click", submitForm);

// Function to clear all input fields
function clearForm() {
    fullnameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
    ageInput.value = "";
}

// Validate fullname
function checkFullname() {
    let name = fullnameInput.value.trim();

    if (name === "") {
        alert("Name cannot be empty.");
        return false;
    } 
    else if (name.length < 2) {
        alert("Name must be at least 2 characters.");
        return false;
    }
    else {
        return true;
    }
}

// Validate email
function checkEmail() {
    let email = emailInput.value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("Email cannot be empty.");
        return false;
    } 
    else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    else {
        return true;
    }
}

// Validate password and confirm password
function checkPassword() {
    let password = passwordInput.value.trim();
    let confirmPassword = confirmPasswordInput.value.trim();
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

    if (password === "") {
        alert("Please enter password");
        return false;
    }
    else if (!passwordRegex.test(password)) {
        alert("Password must be at least 6 characters, include 1 uppercase letter, 1 number, and 1 special character (!@#$%^&*).");
        return false;
    }
    else if (confirmPassword === "") {
        alert("Please confirm your password");
        return false;
    }
    else if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    else {
        return true;
    }
}

// Validate age
function checkAge() {
    let age = parseInt(ageInput.value.trim());

    if (ageInput.value === "") {
        alert("Please enter your age");
        return false;
    }
    else if (isNaN(age) || age < 18) {
        alert("Age must be a number and greater than or equal to 18");
        return false;
    }
    else {
        return true;
    }
}

// Main submit function  to Validate all fields - return immediately if any validation fails
function submitForm() {
    if (!checkFullname()) return;
    if (!checkEmail()) return;
    if (!checkPassword()) return;
    if (!checkAge()) return;
    
    // If all validations pass, log the results
    console.log("Form submitted with the following data:");
    console.log("Full Name:", fullnameInput.value.trim());
    console.log("Email:", emailInput.value.trim());
    console.log("Age:", parseInt(ageInput.value.trim()));
    
    // Display success message
    alert("Form submitted successfully!");
    // Clear all input fields
    clearForm();
}