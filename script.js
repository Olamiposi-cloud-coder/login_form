// JavaScript
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.querySelector('.submit-button');

// Function to change the button color if both fields are filled
function changeButtonColor() {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue !== '' && passwordValue !== '') {
        submitButton.style.backgroundColor = 'hsla(227, 80%, 53%, 1)';
    } else {
        submitButton.style.backgroundColor = 'rgb(70, 101, 212)';
    }
}

// Event listener for email input
emailInput.addEventListener('input', changeButtonColor);

// Event listener for password input
passwordInput.addEventListener('input', changeButtonColor);
