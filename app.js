const slides = document.getElementsByClassName("slide");
const slidesNum = slides.length;
const rightButton = document.querySelector(".right-arrow");
const leftButton = document.querySelector(".left-arrow");
let currentSlide = "0";
slides[0].className = "slide show-slide";

const nextSlide = () => {
    slides[currentSlide].className = "slide";
    currentSlide = (currentSlide + 1) % slidesNum;
    slides[currentSlide].className = "slide show-slide";
    clearInterval(timer);
    timer = setInterval(nextSlide, 3500);
}

const prevSlide = () => {
    slides[currentSlide].className = "slide";
    currentSlide = (currentSlide === 0) ? currentSlide === slidesNum : (currentSlide - 1) % slidesNum; 
    slides[currentSlide].className = "slide show-slide";
    console.log(currentSlide);
    clearInterval(timer);
    timer = setInterval(nextSlide, 3500);
}


rightButton.addEventListener("click", nextSlide);
leftButton.addEventListener("click", prevSlide);

let timer = setInterval(nextSlide, 3500);