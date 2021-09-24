const inputRef = document.querySelector('#validation-input');
const validLength = inputRef.dataset.length;

inputRef.addEventListener('blur', inputValidation);

function inputValidation(event) {
    if (event.currentTarget.value.length == validLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
}
