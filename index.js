"use strict";
const slider = document.querySelector(".slider");
const slide = slider.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
const dot = dotsContainer.querySelectorAll(".dot");
const gallery = document.querySelectorAll(".gallery__box");
const gDots = document.querySelectorAll(".g__dot");
const gDotsContainer = document.querySelector(".g__dots");

let goingForward = true;
let gGoingForward = true;

let currentSlide = 0;
let gSlide = 0;

slide.forEach((ele, i) => {
  ele.style.transform = `translateX(${i * 100}%)`;
});

gallery.forEach((ele, i) => {
  ele.style.transform = `translateX(${i * 100}%)`;
});

function slideFuc(position) {
  slide.forEach((ele, i) => {
    ele.style.transform = `translateX(${(i - position) * 100}%)`;
  });
}

function restInterval() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(TimerFunc, 5000);
}

function TimerFunc() {
  if (currentSlide === 0) {
    goingForward = true;
  } else if (currentSlide === slide.length - 1) {
    goingForward = false;
  }

  if (goingForward) {
    currentSlide++;
  } else {
    currentSlide--;
  }
  dot.forEach((ele) => ele.classList.remove("active-dot"));
  dot[currentSlide].classList.add("active-dot");
  slideFuc(currentSlide);
  console.log(currentSlide);
}

let sliderTimer = setInterval(TimerFunc, 5000);

dotsContainer.addEventListener("click", function (e) {
  if (!e.target.closest(".dot")) return;

  dot.forEach((ele) => ele.classList.remove("active-dot"));
  const dotIndex = e.target.dataset.slide;
  e.target.classList.add("active-dot");

  currentSlide = +dotIndex;
  if (currentSlide === slide.length - 1) {
    goingForward = false;
  }
  restInterval();
  slideFuc(currentSlide);
});

function GRestInterval() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(TimerFunc, 5000);
}

function GTimerFunc() {
  if (gSlide === 0) {
    gGoingForward = true;
  } else if (gSlide === gallery.length - 1) {
    gGoingForward = false;
  }

  if (gGoingForward) {
    gSlide++;
  } else {
    gSlide--;
  }
  gDots.forEach((ele) => ele.classList.remove("active-dot"));
  gDots[gSlide].classList.add("active-dot");
  gallery.forEach((ele, i) => {
    ele.style.transform = `translateX(${(i - gSlide) * 100}%)`;
  });
}

let GSliderTimer = setInterval(GTimerFunc, 5000);

gDotsContainer.addEventListener("click", function (e) {
  if (!e.target.closest(".g__dot")) return;
  gDots.forEach((ele) => ele.classList.remove("active-dot"));
  const dotIndex = e.target.dataset.slide;
  e.target.classList.add("active-dot");

  gSlide = +dotIndex;
  console.log(gSlide);
  GRestInterval();

  gallery.forEach((ele, i) => {
    ele.style.transform = `translateX(${(i - gSlide) * 100}%)`;
  });
});
