//Main menu navigation

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

//Our work nav
//Business work

const busTrack = document.querySelector(".business__work__container");
const busCards = Array.from(busTrack.children);
const busNav = document.querySelector(".business_work_nav");
const busNextButton = busNav.lastElementChild;
const busPrevButton = busNav.firstElementChild;



const busSlideWidth = busCards[0].getBoundingClientRect().width;




const setBusCardPosition = (card, index) =>{
  card.style.left = busSlideWidth*index + 'px'
}

busCards.forEach(setBusCardPosition)



const moveToSlide = (track, currentSlide, targetSlide) =>{
  track.style.transform = 'translateX(-'+ targetSlide.style.left +')';
  currentSlide.classList.remove("current_card");
  targetSlide.classList.add("current_card");
  
}

//Business click on right button

busNextButton.addEventListener('click', e=>{
  const currentBusCard = busTrack.querySelector(".current_card");
  const nextBusCard = currentBusCard.nextElementSibling;

  
  moveToSlide(busTrack, currentBusCard, nextBusCard)

});

//Business click on left button
busPrevButton.addEventListener('click', e=>{
  const currentBusCard = busTrack.querySelector(".current_card")
  const prevBusCard = currentBusCard.previousElementSibling

  moveToSlide(busTrack, currentBusCard, prevBusCard)

})


//Homes work
const homeTrack = document.querySelector(".home__work__container");
const homeCards = Array.from(homeTrack.children)

const homeNav = document.querySelector(".home_work_nav")
const homeNextButton = homeNav.lastElementChild
const homePrevButton = homeNav.firstElementChild

const homeSlideWidth = homeCards[0].getBoundingClientRect().width;




const setHomeCardPosition = (card, index) =>{
  card.style.left = homeSlideWidth*index + 'px'
}

homeCards.forEach(setHomeCardPosition)




//Home click on right button

homeNextButton.addEventListener('click', e=>{
  const currentHomeCard = homeTrack.querySelector(".current_card");
  const nextHomeCard = currentHomeCard.nextElementSibling;

  
  moveToSlide(homeTrack, currentHomeCard, nextHomeCard)

});

//Home click on left button
homePrevButton.addEventListener('click', e=>{
  const currentHomeCard = homeTrack.querySelector(".current_card")
  const prevHomeCard = currentHomeCard.previousElementSibling

  moveToSlide(homeTrack, currentHomeCard, prevHomeCard)

})

//Solutions

const busSol = document.getElementById("business_solutions")
const busSolTrack = busSol.lastElementChild
const busSolCards = Array.from(busSolTrack.children)

const homeSol = document.getElementById("home_solutions")
const homeSolTrack = homeSol.lastElementChild
const homeSolCards = Array.from(homeSolTrack.children)


let width = window.innerWidth


// const observer = new IntersectionObserver(entries =>{

// })

// observer.observe()
solutionAddActive = function(solution){solution.classList.add('active')};
solutionRemoveActive = function(solution){solution.classList.remove('active')};


if(width < 560){
  console.log(width)
  setInterval(()=>{
    for(var i = 0; i < busSolCards.length; i++){
      if(i+1 == busSolCards.length){
        solutionAddActive(busSolCards[0]);
        busSolCards[0].style.zIndex = 100;
        setTimeout(solutionRemoveActive, 350, busSolCards[i]);
        break;
      }
      if(busSolCards[i].classList.contains('active')){
        busSolCards[i].removeAttribute('style');
        setTimeout(solutionRemoveActive, 350, busSolCards[i]);
        solutionAddActive(busSolCards[i + 1]);
        break;
      }
    }
    
  }, 8000);

  setInterval(()=>{
    for(var i = 0; i < homeSolCards.length; i++){
      if(i+1 == homeSolCards.length){
        solutionAddActive(homeSolCards[0]);
        homeSolCards[0].style.zIndex = 100;
        setTimeout(solutionRemoveActive, 350, homeSolCards[i]);
        break;
      }
      if(homeSolCards[i].classList.contains('active')){
        homeSolCards[i].removeAttribute('style');
        setTimeout(solutionRemoveActive, 350, homeSolCards[i]);
        solutionAddActive(homeSolCards[i + 1]);
        break;
      }
    }
    
  }, 8000);
}






