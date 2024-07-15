// script5.js

// Scroll Effect
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        let sectionHeight = section.offsetHeight;
        let sectionTop = section.offsetTop - window.innerHeight / 1.2;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
});

// Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
const modeIcon = modeToggle.querySelector('i');

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        modeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        modeIcon.classList.replace('bx-sun', 'bx-moon');
    }
});

// Toggle Mobile Navigation
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
