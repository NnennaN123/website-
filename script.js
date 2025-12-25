let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Remove .toString here - that's the bug!
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Computer Engineering Student','Undergraduate Researcher','Aspiring Hardware Engineer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1200,
    loop: true,
});