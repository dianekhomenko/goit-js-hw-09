const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");e.addEventListener("click",(e=>{setInterval((()=>{console.log("event"),o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,document.querySelector("[data-start]").disabled=!0}),1e3)})),t.addEventListener("click",(e=>{clearInterval(timerColor),document.querySelector("[data-start]").disabled=!1}));
//# sourceMappingURL=01-color-switcher.d6473ff6.js.map
