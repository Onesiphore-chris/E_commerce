let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');
let cdn = document.querySelector('.header .cdn');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    cdn.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    cdn.classList.remove('active');
};
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
   cdn.classList.remove('active');

};

document.querySelector('#cdn').onclick = () =>{
    cdn.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};



document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
};
document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
}
