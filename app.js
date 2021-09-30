// Variables
const slides = document.getElementsByClassName("slide");
const slider = document.querySelector("#slider");
const slidesNum = slides.length;
const rightButton = document.querySelector(".right-arrow");
const leftButton = document.querySelector(".left-arrow");
const sliderDots = document.querySelector(".slider-dots");
console.log(sliderDots.style.width);
const dots = document.getElementsByClassName("slider-dot");
const dotsNum = dots.length;

let currentSlide = 0;
let currentDot = 0;
dots[currentDot].className = "slider-dot current-dot";

//Functions
const transform = () => {
    slider.style.transform = `translateX(${currentSlide * -800}px)`;
}

const dotSlide = (n) => {
    dots[currentDot].className = "slider-dot";
    currentDot = (n - 1) % dotsNum;
    dots[currentDot].className = "slider-dot current-dot";
    slider.style.transform = `translateX(${currentDot * -800}px)`;
    clearInterval(timer);
    timer = setInterval(nextSlide, 4000);
}

const nextSlide = () => {
    dots[currentSlide].className = "slider-dot";
    currentSlide = (currentSlide + 1) % slidesNum;
    dots[currentSlide].className = "slider-dot current-dot";
    transform();
    clearInterval(timer);
    timer = setInterval(nextSlide, 4000);
}

const prevSlide = () => {
    dots[currentSlide].className = "slider-dot";
    currentSlide = (currentSlide - 1) % slidesNum;
    if (currentSlide === -1) {
        currentSlide = 2
    }
    dots[currentSlide].className = "slider-dot current-dot";
    transform();
    clearInterval(timer);
    timer = setInterval(nextSlide, 4000);
}

rightButton.addEventListener("click", nextSlide);
leftButton.addEventListener("click", prevSlide);

let timer = setInterval(nextSlide, 4000);