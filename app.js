const slides = document.getElementsByClassName("slide");
const slider = document.querySelector("#slider");
const slidesNum = slides.length;
const rightButton = document.querySelector(".right-arrow");
const leftButton = document.querySelector(".left-arrow");
let currentSlide = "0";



const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slidesNum;
    slider.style.transform = `translateX(${currentSlide * -600}px)`;
    console.log(currentSlide, currentSlide * -600)
}

const prevSlide = () => {
    currentSlide = (currentSlide - 1) % slidesNum;
    if (currentSlide === -1) {
        currentSlide = 2
    }
    slider.style.transform = `translateX(${currentSlide * -600}px)`;
    console.log(currentSlide, currentSlide * 600);
}


rightButton.addEventListener("click", nextSlide);
leftButton.addEventListener("click", prevSlide);

// let timer = setInterval(nextSlide, 3500);