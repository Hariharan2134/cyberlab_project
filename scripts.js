document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let valid = true;

    // Get form elements
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Clear previous error messages
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';

    // Validate username
    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required.';
        usernameError.style.display = 'block';
        valid = false;
    }

    // Validate password
    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
        passwordError.style.display = 'block';
        valid = false;
    }

    // If form is valid, redirect to success page
    if (valid) {
        window.location.href = 'success.html';
    }
});
    