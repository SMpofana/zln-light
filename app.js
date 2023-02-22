//navigation

const burgerMenu = document.querySelector(".hamburger_lines")
const burgerline1 = burgerMenu.firstElementChild;
const burgerline2 = burgerline1.nextElementSibling;
const burgerline3 = burgerMenu.lastElementChild;

const menu = document.querySelector(".menu_items");

burgerMenu.addEventListener("click", (e) =>{

    console.log("We are listening")

    menu.classList.toggle('active');
    burgerline1.classList.toggle('active');
    burgerline2.classList.toggle('active');
    burgerline3.classList.toggle('active')

})

//header solutions carousel

const headerTrack = document.querySelector(".header__bottom__carousel__track");
const headerSlides = Array.from(headerTrack.children)

//Update Nav dots
const currentSlide = headerTrack.querySelector(".active")
const nextSlide = currentSlide.nextElementSibling;
const navDot = document.querySelector(".indicator_container")
const dots = Array.from(navDot.children);


addActive = (slide) =>{slide.classList.add('active')};
removeActive = (slide) =>{slide.classList.remove('active')}


setInterval(function (){
    const currentDot = navDot.querySelector(".active");
    let nextDot  = currentDot.nextElementSibling;
    const nextIndex = headerSlides.findIndex(slide => slide === nextSlide)

      for (var i = 0; i < headerSlides.length; i++){
        if(nextDot == null){

            nextDot = dots[0];
            updateNavDots(currentDot, nextDot)

        }else{
            updateNavDots(currentDot, nextDot)
        }
        updateNavDots(currentDot, nextDot)
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



const updateNavDots = (currentDot, targetDot) =>{
    currentDot.classList.remove('active');
    targetDot.classList.add('active')
}

//Our work tabs

const workTabs = document.querySelector(".work_container");
const workTabHeader = document.querySelector(".work_heading");
const workTabBody = document.querySelector(".work_body");
const workTabHeaderNodes = Array.from(workTabHeader.children)
const workTabBodyNodes = Array.from(workTabBody.children);

const businessWorkTrack = document.querySelector(".business__work__container");
const businessWork = Array.from(businessWorkTrack.children)

const homeWorkTrack = document.querySelector(".home__work__container");
const homeWork = Array.from(homeWorkTrack.children);
const tabInterval = 8000

busCardAddCurrent = (card) =>{card.classList.add("current_card")};
busCardRemoveCurrent = (card) =>{card.classList.remove("current_card")};

homeCardAddCurrent = (hcard) =>{card.classList.add("current_card")};
homeCardRemoveCurrent = (hcard) =>{card.classList.remove("current_card")};

for(let i=0; i<workTabHeaderNodes.length; i++){
  
    
  workTabHeaderNodes[i].addEventListener("click", (e) =>{
      console.log(workTabHeaderNodes[i])
      workTabHeader.querySelector(".active").classList.remove("active");
      workTabHeaderNodes[i].classList.add("active");
      workTabBody.querySelector(".active").classList.remove("active");
      workTabBodyNodes[i].classList.add("active");
      // tabHeaderNodes[i].style.left = `calc(calc(calc(25% - 5px) * ${i}) + 10px)`;
      
      
  });

  
}
//Our work automation

// setInterval(()=>{
//   for(var i = 0; i < businessWork.length; i++){
//     if(i + 1 == businessWork.length){
//       busCardAddCurrent(businessWork[0]);
//       businessWork[0].style.zIndex = 100;
//       setTimeout(busCardAddCurrent, 350, businessWork[i]);
//       break;
//     }
//     if(businessWork[i].classList.contains('current_card')){
//       businessWork[i].removeAttribute('style');
//       setTimeout(busCardRemoveCurrent, 350, businessWork[i]);
//       busCardAddCurrent(businessWork[i + 1]);
//       break;
//     }
//   }
// }, 5000);

// setInterval(()=>{
//   for(var i = 0; i < homeWork.length; i++){
//     if(i + 1 == homeWork.length){
//       homeCardAddCurrent(homeWork[0]);
//       homeWork[0].style.zIndex = 100;
//       setTimeout(homeCardAddCurrent, 350, homeWork[i]);
//       break;
//     }
//     if(homeWork[i].classList.contains('current_card')){
//       homeWork[i].removeAttribute('style');
//       setTimeout(homeCardRemoveCurrent, 350, homeWork[i]);
//       homeCardAddCurrent(homeWork[i + 1]);
//       break;
//     }
//   }
// }, 5000);

