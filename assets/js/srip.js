const container = document.querySelector('.container')
const registerBtn = document.querySelector('.register-btn')
const loginBtn = document.querySelector('.login-btn')

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

const after_login = document.getElementById("login_form")
const after_register = document.getElementById("register_form")

after_login.addEventListener("submit",function(event){
    event.preventDefault();
    window.location.href="index.html";
}
)
after_register.addEventListener("submit",function(event){
    event.preventDefault();
    window.location.href="index.html";
}
)
