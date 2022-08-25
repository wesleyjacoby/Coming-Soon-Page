const body = document.body;
const form = document.querySelector('#email-form');
const email = document.querySelector('#email');
const small = document.querySelector('small');
const input = document.querySelector('input');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

body.addEventListener('click', () => {
    if (small.classList.contains('error')) {
        small.classList.remove('error');
        small.innerText = '';
        input.classList.remove('input-error');
    }
})

form.addEventListener('submit', e => {
    e.preventDefault();
    // remove any whitespace
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setError(email, 'Whoops! It looks like you forgot to add your email')
    } else if (!emailValue.match(emailRegex)) {
        setError(email, 'Please provide a valid email address')
    } else {
        setSuccess(email, 'We have captured your email address')
    }
})

function setError(input, message) {
    small.classList.add('error');
    input.classList.add('input-error');
    small.innerText = message;
}

function setSuccess(input, message) {
    small.classList.add('success');
    input.classList.add('input-success');
    small.innerText = message;
}