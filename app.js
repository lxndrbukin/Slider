const slides = document.getElementsByClassName("slide");
const slidesNum = slides.length;
const rightButton = document.querySelector(".right-arrow");
let currentSlide = "0";
slides[0].className = "slide show-slide";

const moveSlide = () => {
    slides[currentSlide].className = "slide";
    currentSlide = (currentSlide + 1) % slidesNum;
    slides[currentSlide].className = "slide show-slide";
}


rightButton.addEventListener("click", moveSlide);

// setInterval(moveSlide, 5000);