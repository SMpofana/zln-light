"use strict";

//navigation
var burgerMenu = document.querySelector(".hamburger_lines");
var burgerline1 = burgerMenu.firstElementChild;
var burgerline2 = burgerline1.nextElementSibling;
var burgerline3 = burgerMenu.lastElementChild;
var menu = document.querySelector(".menu_items");
burgerMenu.addEventListener("click", function (e) {
  console.log("We are listening");
  menu.classList.toggle('active');
  burgerline1.classList.toggle('active');
  burgerline2.classList.toggle('active');
  burgerline3.classList.toggle('active');
}); //header solutions carousel

var headerTrack = document.querySelector(".header__bottom__carousel__track");
var headerSlides = Array.from(headerTrack.children); //Update Nav dots

var currentSlide = headerTrack.querySelector(".active");
var nextSlide = currentSlide.nextElementSibling;
var navDot = document.querySelector(".indicator_container");
var dots = Array.from(navDot.children);

addActive = function addActive(slide) {
  slide.classList.add('active');
};

removeActive = function removeActive(slide) {
  slide.classList.remove('active');
};

setInterval(function () {
  var currentDot = navDot.querySelector(".active");
  var nextDot = currentDot.nextElementSibling;
  var nextIndex = headerSlides.findIndex(function (slide) {
    return slide === nextSlide;
  });

  for (var i = 0; i < headerSlides.length; i++) {
    if (nextDot == null) {
      nextDot = dots[0];
      updateNavDots(currentDot, nextDot);
    } else {
      updateNavDots(currentDot, nextDot);
    }

    updateNavDots(currentDot, nextDot);

    if (i + 1 == headerSlides.length) {
      addActive(headerSlides[0]);
      headerSlides[0].style.zIndex = 100;
      setTimeout(removeActive, 350, headerSlides[i]); //Doesn't be worked in IE-9

      break;
    }

    if (headerSlides[i].classList.contains('active')) {
      headerSlides[i].removeAttribute('style');
      setTimeout(removeActive, 350, headerSlides[i]); //Doesn't be worked in IE-9

      addActive(headerSlides[i + 1]);
      break;
    }
  }
}, 8000);

var updateNavDots = function updateNavDots(currentDot, targetDot) {
  currentDot.classList.remove('active');
  targetDot.classList.add('active');
}; //Our work tabs


var workTabs = document.querySelector(".work_container");
var workTabHeader = document.querySelector(".work_heading");
var workTabBody = document.querySelector(".work_body");
var workTabHeaderNodes = Array.from(workTabHeader.children);
var workTabBodyNodes = Array.from(workTabBody.children);

var _loop = function _loop(i) {
  workTabHeaderNodes[i].addEventListener("click", function (e) {
    console.log(workTabHeaderNodes[i]);
    workTabHeader.querySelector(".active").classList.remove("active");
    workTabHeaderNodes[i].classList.add("active");
    workTabBody.querySelector(".active").classList.remove("active");
    workTabBodyNodes[i].classList.add("active"); // tabHeaderNodes[i].style.left = `calc(calc(calc(25% - 5px) * ${i}) + 10px)`;
  });
};

for (var i = 0; i < workTabHeaderNodes.length; i++) {
  _loop(i);
} //Our work automation