// apparently vanilla JS breaks on negative modulo, WTF?
const mod = (x, n) => (x % n + n) % n

window.onload = () => {
  var slides = document.querySelectorAll(".demo");
  slides.forEach(slide => {
    slide.style.backgroundImage = `url(${slide.attributes["src"].value})`;
  });
  showSlides(0);
}

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex + n);
}

function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  var slides = document.querySelectorAll(".demo");
  var captionText = document.getElementById("caption");

  if (slides.length > 0) {
    slideIndex = mod(n, slides.length);
  }
  var mainImg = document.querySelector(".customCarousel > .mainImg");
  console.log(mainImg);
  mainImg.style.backgroundImage = `url(${slides[slideIndex].attributes["src"].value})`;
  mainImg.alt = slides[slideIndex].attributes["alt"].value;
  for (let i = 0; i < slides.length; i++) {
  	  slides[i].classList.remove("active");
  }
  slides[slideIndex].classList.add("active");
  captionText.innerHTML = mainImg.alt;
}