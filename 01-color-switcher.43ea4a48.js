!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body"),n=null;t.addEventListener("click",(function(t){n=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),document.querySelector("[data-start]").disabled=!0}),1e3)})),e.addEventListener("click",(function(t){clearInterval(n),document.querySelector("[data-start]").disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.43ea4a48.js.map
