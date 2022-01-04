"use strict"

// Statemenst

const body = document.getElementById("body"),
    calculator = document.getElementById("calculator"),
    theme1 = document.getElementById("theme-1"),
    theme2 = document.getElementById("theme-2"),
    theme3 = document.getElementById("theme-3"),
    circle = document.getElementById("circle"),
    screen = document.getElementById("result");

// Function

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
    let key = e.target.value;

    if ( e.target.classList.contains("calculator__button") ){
        e.preventDefault();

        if ( key == "delete" ) {
            if ( screen.value == "" ) {
            }
            else{
                let index = screen.value.length;
                screen.value = screen.value.slice( 0, ( index - 1 ));
            }
        }
        else if ( key == "reset" ) {
            screen.value = "";
        }
        else if ( key == "=" ) {
            if (screen.value.endsWith("-") ||
            screen.value.endsWith("+") ||
            screen.value.endsWith("/") ||
            screen.value.endsWith("*")
            ) screen.value = screen.value.slice( 0, -1);

            let cuenta = screen.value;
            
            if ( cuenta.endsWith(",") ) {
                cuenta = cuenta.slice(0 , -1)
            }

            while (cuenta.includes(",")) {
                cuenta = cuenta.replace(",",".")
            }

            cuenta = eval( cuenta ).toString();
            
            while (cuenta.includes(",")) {
                cuenta = cuenta.replace(".", ",")
            }

            screen.value = cuenta;
        }
        else if ( key == "+" || key == "-" || key == "*" || key == "/" ) {
            if (
                screen.value.endsWith("+") ||
                screen.value.endsWith("-") ||
                screen.value.endsWith("/") ||
                screen.value.endsWith("*") && 
                screen.value != "" 
                ) {
                    console.log("paso?")
                    let index = screen.value.length;
                    console.log(screen.value)
                    let newSimbol = screen.value.slice( 0, ( index - 1 )) + key;
                    console.log(newSimbol)
                    screen.value = newSimbol;
                }
            else if (screen.value[screen.value.length - 1] !== key && screen.value != "" ) screen.value += key;
            else {
                console.log("hola")
                screen.value += "0" + key;
            }
        }
        else {
            if ( key !=  "," ) screen.value += key;

            if ( key == "," && 
            screen.value === ""  ||
            screen.value.endsWith("+")  ||
            screen.value.endsWith("-")  ||
            screen.value.endsWith("*")  ||
            screen.value.endsWith("/") 
            ) screen.value += "0,";
            else if ( key == "," && !screen.value.endsWith(",") ) screen.value += key;
        }  
    }
})