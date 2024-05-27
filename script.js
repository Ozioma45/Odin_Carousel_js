// scripts.js

let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function currentSlide(index) {
  showSlide(index);
}

let slideInterval = setInterval(nextSlide, 5000);

document.querySelector(".carousel").addEventListener("mouseover", () => {
  clearInterval(slideInterval);
});

document.querySelector(".carousel").addEventListener("mouseout", () => {
  slideInterval = setInterval(nextSlide, 5000);
});

// Initialize the carousel
showSlide(currentIndex);
