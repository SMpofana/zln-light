"use strict";

require("https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHRDcWlQTDd0T205SVRjVGtYMjd1YWgybTBDUXxBQ3Jtc0ttQmg2VnVYMFZOMmlkcWRaaHhCNGtJaHUxR0dFMTdnLWl1dXhTczE3blljd28waW1mVXlmRXlxRzhRc2l4blZjZVk1X2hzVGVYdW8tU2FWN0JPNERobHl5UmNQVVZDLTQ0elBpOFhHbnRlUTBzVTVfRQ&q=https%3A%2F%2Fgithub.com%2Fflackr%2Fscroll-timeline&v=VgS5CP7zlXE");

var scrollTracker = document.querySelector(".scroll_tracker");
var scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});
scrollTracker.animate({
  transform: ["scaleY(0)", "scaleY(1)"]
}, {
  duration: 1,
  timeline: scrollTrackingTimeline
});