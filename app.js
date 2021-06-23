const slides = document.getElementsByClassName("slide");
const slidesNum = slides.length;
const rightButton = document.querySelector(".right-arrow");
console.log(slidesNum);
slides[0].style.zIndex = "1";


rightButton.addEventListener("click", function moveSlide() {
    slides[0].style.left = "600px";
});