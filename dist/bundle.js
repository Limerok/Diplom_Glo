(()=>{"use strict";var e,t,n,o,l,c,s,a,r,i,d,u,y,m,f,h;y=document.querySelector(".overlay"),m=document.querySelector(".header-modal"),f=document.querySelector(".services-modal"),h=document.querySelector(".block-modal"),document.querySelectorAll(".fancyboxModal").forEach((function(e){var t=e.getAttribute("href");"#callback"===t||"#order"===t?e.addEventListener("click",(function(e){e.preventDefault(),y.style.display="block",m.style.display="block"})):"#application"===t&&e.addEventListener("click",(function(e){e.preventDefault(),y.style.display="block",f.style.display="block"}))})),h.addEventListener("click",(function(e){var t=e.target;if(t.classList.contains("header-modal__close"))y.style.display="none",m.style.display="none";else if(t.classList.contains("services-modal__close"))y.style.display="none",f.style.display="none";else{var n=t.closest(".header-modal"),o=t.closest(".services-modal");n||o||(y.style.display="none",m.style.display="none",f.style.display="none")}})),d=document.querySelector(".smooth-scroll"),u=document.getElementById("header").clientHeight+document.getElementById("navigation").clientHeight+document.getElementById("offer").clientHeight,window.addEventListener("scroll",(function(){var e=window.pageYOffset;e>u?d.style.display="block":e<=u&&(d.style.display="none")})),d.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),l="19 July 2021",c=document.querySelectorAll(".count_1 span"),s=document.querySelectorAll(".count_2 span"),a=document.querySelectorAll(".count_3 span"),r=document.querySelectorAll(".count_4 span"),i=setInterval((function(){var e,t={timeRemaining:e=(new Date(l).getTime()-(new Date).getTime())/1e3,seconds:Math.floor(e%60),minutes:Math.floor(e/60%60),hours:Math.floor(e/60/60%24),day:Math.floor(e/60/60/24)};c.forEach((function(e){e.textContent=t.day<10?"0"+t.day:t.day})),s.forEach((function(e){e.textContent=t.hours<10?"0"+t.hours:t.hours})),a.forEach((function(e){e.textContent=t.minutes<10?"0"+t.minutes:t.minutes})),r.forEach((function(e){e.textContent=t.seconds<10?"0"+t.seconds:t.seconds})),t.timeRemaining<0&&(clearInterval(i),c.forEach((function(e){e.textContent="00"})),s.forEach((function(e){e.textContent="00"})),a.forEach((function(e){e.textContent="00"})),r.forEach((function(e){e.textContent="00"})))}),1e3),e=document.getElementById("documents"),t=document.querySelector(".modal-documents"),n=document.querySelector(".img-modal"),o=document.querySelector(".overlay-document"),e.addEventListener("click",(function(e){e.preventDefault();var l=e.target;if(l.closest(".sertificate-document")){var c=l.closest(".sertificate-document").getAttribute("href");o.style.display="block",t.style.display="block",n.setAttribute("src",c)}})),t.addEventListener("click",(function(e){e.preventDefault();var n=e.target;(n.closest(".header-modal__close")||n.matches(".overlay-document"))&&(t.style.display="none")}))})();