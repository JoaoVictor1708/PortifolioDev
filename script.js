"use strict"

// toggleTheme
const toggleTheme = document.querySelector(".toggleTheme")
const btnToggleMode = document.querySelector("#btnToggleMode")
btnToggleMode.addEventListener("click", ()=> {
    if(btnToggleMode.className === "fa-solid fa-cloud-sun"){
        btnToggleMode.className = "fa-solid fa-cloud-moon"
        document.body.className = "darkModeTheme"
        btnToggleMode.style.animationName = "toggleThemeAnimation"
    }
    else{
        btnToggleMode.className = "fa-solid fa-cloud-sun"
        document.body.className = "lightModeTheme"
        btnToggleMode.style.animationName = "toggleThemeAnimationReverse"
    }
})