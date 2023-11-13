//Navigation bar 
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});




//Banner 
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.pagination-dots');

let slideIndex = 0;

// Create pagination dots
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');
dots[slideIndex].classList.add('active-dot');

function goToSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    slideIndex = index;

    carousel.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active-dot');
        } else {
            dot.classList.remove('active-dot');
        }
    });
}

function nextSlide() {
    goToSlide(slideIndex + 1);
}

function prevSlide() {
    goToSlide(slideIndex - 1);
}

// Auto slide
setInterval(nextSlide, 5000);







//Testiminials section

var testimonials = document.getElementById('testimonials');
var control1 = document.getElementById('control1');
var control2 = document.getElementById('control2');
var control3 = document.getElementById('control3');


control1.onclick=function(){
    testimonials.style.transform = "translateX(0px)"; //650
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
}

control2.onclick=function(){
    testimonials.style.transform = "translateX(-544px)";
    control1.classList.remove("active");
    control2.classList.add("active");
    control3.classList.remove("active");
}

control3.onclick=function(){
    testimonials.style.transform = "translateX(-1078px)"; //540
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
}
