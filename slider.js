const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.slider .prev');
const nextButton = document.querySelector('.slider .next');

let currentIndex = 0;

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

function prevSlide() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].classList.add('active');
}

function nextSlide() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

function initSlider() {
  images[currentIndex].classList.add('active');
}

initSlider();
    