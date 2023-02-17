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

for(let i=0; i<workTabHeaderNodes.length; i++){

    console.log(workTabBody.children)
    
    workTabHeaderNodes[i].addEventListener("click", (e) =>{
        console.log(workTabHeaderNodes[i])
        workTabHeader.querySelector(".active").classList.remove("active");
        workTabHeaderNodes[i].classList.add("active");
        workTabBody.querySelector(".active").classList.remove("active");
        workTabBodyNodes[i].classList.add("active");
        // tabHeaderNodes[i].style.left = `calc(calc(calc(25% - 5px) * ${i}) + 10px)`;
       
       
    });

}