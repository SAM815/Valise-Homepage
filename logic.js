
const loginForm = document.getElementById('form1');
const signUpForm = document.getElementById('form2');

let signUpLink = document.getElementById('signuplink');
signUpLink.addEventListener('click', ()=>{
   
    loginForm.style.display = 'none';
   signUpForm.style.display = 'block';
})



