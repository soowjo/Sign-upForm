const firstPassword = document.querySelector('#password');
const secondPassword = document.querySelector('#confirmPassword');
const submitButton = document.querySelector('button');

submitButton.addEventListener('click',checkPassword);
function checkPassword() {
    if (firstPassword !== secondPassword) {
        alert('Passwords do not match!');
    }
}