"use strict"

// Statemenst

const body = document.getElementById("body"),
    calculator = document.getElementById("calculator"),
    theme1 = document.getElementById("theme-1"),
    theme2 = document.getElementById("theme-2"),
    theme3 = document.getElementById("theme-3"),
    circle = document.getElementById("circle");

// Event

theme1.addEventListener("change", () => {
    circle.classList.add("theme1");
    circle.classList.remove("theme2");
    circle.classList.remove("theme3");
    
    body.classList.remove("theme-2");
    body.classList.remove("theme-3");
})

theme2.addEventListener("change", () => {
    circle.classList.add("theme2");
    circle.classList.remove("theme1");
    circle.classList.remove("theme3");

    body.classList.add("theme-2");
    body.classList.remove("theme-3");
})

theme3.addEventListener("change", () => {
    circle.classList.add("theme3");
    circle.classList.remove("theme1");
    circle.classList.remove("theme2");

    body.classList.add("theme-3");
    body.classList.remove("theme-2");
})

calculator.addEventListener("click", (e) => {
    if ( e.target.classList.contains("calculator__button") ) {
        e.preventDefault()
    }
})


// parseFloat("2.44")