const firstSliderButton = document.querySelector('.btn-1');
const secondSliderButton = document.querySelector('.btn-2');
const thirdSliderButton = document.querySelector('.btn-3');
const slider = document.querySelector('.site-wrapper');
const firstSlide = document.querySelector('.slider-item-1');
const secondSlide = document.querySelector('.slider-item-2');
const thirdSlide = document.querySelector('.slider-item-3');

firstSliderButton.addEventListener('click', function () {
  if (firstSliderButton.classList.contains('current')) {} else {
    firstSliderButton.classList.add('current');
    slider.classList.add('site-wrapper-1');
    firstSlide.classList.add('slide-current');
    if (secondSliderButton.classList.contains('current')) {
      secondSliderButton.classList.remove('current');
      slider.classList.remove('site-wrapper-2');
      secondSlide.classList.remove('slide-current');
    }
    if (thirdSliderButton.classList.contains('current')){
      thirdSliderButton.classList.remove('current');
      slider.classList.remove('site-wrapper-3');
      thirdSlide.classList.remove('slide-current');
    }
  }
});

secondSliderButton.addEventListener('click', function () {
  if (secondSliderButton.classList.contains('current')) {} else {
    secondSliderButton.classList.add('current');
    slider.classList.add('site-wrapper-2');
    secondSlide.classList.add('slide-current');
    if (firstSliderButton.classList.contains('current')) {
      firstSliderButton.classList.remove('current');
      slider.classList.remove('site-wrapper-1');
      firstSlide.classList.remove('slide-current');
    }
    if (thirdSliderButton.classList.contains('current')){
      thirdSliderButton.classList.remove('current');
      slider.classList.remove('site-wrapper-3');
      thirdSlide.classList.remove('slide-current');
    }
  }
});

thirdSliderButton.addEventListener('click', function () {
  if (thirdSliderButton.classList.contains('current')) {} else {
    thirdSliderButton.classList.add('current');
    slider.classList.add('site-wrapper-3');
    thirdSlide.classList.add('slide-current');
    if (firstSliderButton.classList.contains('current')) {
      firstSliderButton.classList.remove('current');
      slider.classList.remove('site-wrapper-1');
      firstSlide.classList.remove('slide-current');
    }
    if (secondSliderButton.classList.contains('current')){
      secondSliderButton.classList.remove('current');
      slider.classList.remove('site-wrapper-2');
      secondSlide.classList.remove('slide-current');
    }
  }
});
