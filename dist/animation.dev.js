// // import "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHRDcWlQTDd0T205SVRjVGtYMjd1YWgybTBDUXxBQ3Jtc0ttQmg2VnVYMFZOMmlkcWRaaHhCNGtJaHUxR0dFMTdnLWl1dXhTczE3blljd28waW1mVXlmRXlxRzhRc2l4blZjZVk1X2hzVGVYdW8tU2FWN0JPNERobHl5UmNQVVZDLTQ0elBpOFhHbnRlUTBzVTVfRQ&q=https%3A%2F%2Fgithub.com%2Fflackr%2Fscroll-timeline&v=VgS5CP7zlXE";
// // const scrollTracker = document.querySelector(".scroll_tracker");
// // const scrollTrackingTimeline = new ScrollTimeline({
// //     source: document.scrollingElement,
// //     orientation: "block",
// //     scrollOffsets: [CSS.percent(0), CSS.percent(100)]
// // });
// // scrollTracker.animate(
// //     {
// //         transform: [ "scaleY(0)", "scaleY(1)"],
// //     }, 
// //     {
// //         duration: 5,
// //         timeline: scrollTrackingTimeline,
// //     }
// // );
// const businessWorkTrack = document.querySelector(".business__work__container");
// const businessWork = Array.from(businessWorkTrack.children)
// const homeWorkTrack = document.querySelector(".home__work__container");
// const homeWork = Array.from(homeWorkTrack.children);
// const tabInterval = 8000
// busCardAddCurrent = (card) =>{card.classList.add("current_card")};
// busCardRemoveCurrent = (card) =>{card.classList.remove("current_card")};
// homeCardAddCurrent = (hcard) =>{card.classList.add("current_card")};
// homeCardRemoveCurrent = (hcard) =>{card.classList.remove("current_card")};
// for(let i=0; i<workTabHeaderNodes.length; i++){
//   workTabHeaderNodes[i].addEventListener("click", (e) =>{
//       console.log(workTabHeaderNodes[i])
//       workTabHeader.querySelector(".active").classList.remove("active");
//       workTabHeaderNodes[i].classList.add("active");
//       workTabBody.querySelector(".active").classList.remove("active");
//       workTabBodyNodes[i].classList.add("active");
//       // tabHeaderNodes[i].style.left = `calc(calc(calc(25% - 5px) * ${i}) + 10px)`;
//   });
// }
// //Our work automation
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
"use strict";