"use strict";(function(){try{let mode=JSON.parse(localStorage.getItem("mode"));if(mode){if(mode==="dark"){document.body.classList.add("theme-dark");document.body.classList.remove("theme-light")}else{document.body.classList.add("theme-light");document.body.classList.remove("theme-dark")}}
if(!mode){if(window.matchMedia("(prefers-color-scheme: dark)").media!=="not all"){const supportDarkMode=window.matchMedia("(prefers-color-scheme: dark)").matches===!0;if(supportDarkMode){mode="dark";document.body.classList.add("theme-dark");document.body.classList.remove("theme-light")}}else{mode="light";document.body.classList.add("theme-light");document.body.classList.remove("theme-dark")}}
document.documentElement.setAttribute("data-color-scheme",mode==="dark"?"dark":"light")}catch(e){}})()