const form = document.querySelector('#form');
const message = document.querySelector('#message');

const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
let passwordMatch = false;
let isValid = false;
function validateForm()
{
    isValid = form.checkValidity();
    console.log(isValid);
    if(!isValid)
    {
        message.textContent = 'Please fill out all fields';
    }
    else
    {
        if(password1.value===password2.value)
{
    passwordMatch = true;
    password1.style.borderColor = 'green';
    password2.style.borderColor = 'green';
}
else{
    passwordMatch = false;
    message.textContent = 'Makse sure passwords match';
    message.style.color = 'red';
    password1.style.borderColor = 'red';
    password2.style.borderColor = 'red';
}
if(isValid && passwordMatch)
{
    message.textContent = 'Sucessfully Registerd!';
    message.style.color = 'green';
}
    }

}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateForm();
    if(isValid && passwordMatch)
    {
        const user = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            website: form.phone.value,
            password: form.password.value
        };
        console.log(user);
    }
});



//constraint validation api