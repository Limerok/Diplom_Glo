(()=>{"use strict";var e,l,o;e=document.querySelector(".overlay"),l=document.querySelector(".header-modal"),o=document.querySelector(".block-modal"),document.getElementById("callback"),document.querySelectorAll(".fancyboxModal").forEach((function(o){o.addEventListener("click",(function(o){o.preventDefault(),e.style.display="block",l.style.display="block"}))})),o.addEventListener("click",(function(o){var t=o.target;console.log(t),t.classList.contains("header-modal__close")?(e.style.display="none",l.style.display="none"):(t=t.closest(".header-modal"))||(e.style.display="none",l.style.display="none")}))})();