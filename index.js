"use strict"

const numbers = document.querySelectorAll("#btn");

const btnSend = document.getElementById("btnSend");

const btnClears = document.querySelectorAll("#btnClear");

const display = document.getElementById("answer");

function suma(text) {
    const parts = text.split("+")
    const number1 = Number(parts[0]);
    const number2 = Number(parts[1]);
    const sumaNum = Number(number1 + number2);
    return sumaNum;
}

function resta(text) {
    const parts = text.split("-")
    const number1 = Number(parts[0]);
    const number2 = Number(parts[1]);
    return number1 - number2;
}

function multiplicacion(text) {
    const parts = text.split("×")
    const number1 = Number(parts[0]);
    const number2 = Number(parts[1]);
    return number1 * number2;
}

function division(text) {
    const parts = text.split("÷")
    const number1 = Number(parts[0]);
    const number2 = Number(parts[1]);
    if (number2 === 0) {
        return `El divisor no puede ser cero`
    } else {
        return number1 / number2;
    }
}

numbers.forEach(number => {
    number.addEventListener("click", () => {
        display.value += number.textContent;
        btnSend.addEventListener("click", () => {
            if (display.value.includes("+")) {
                display.value = suma(display.value);              
            } else if (display.value.includes("-")){
                display.value = resta(display.value);                
            } else if (display.value.includes("×")){
                display.value = multiplicacion(display.value);
            } else if (display.value.includes("÷")){
                display.value = division(display.value);
            }
        })
    });
});

btnClears.forEach(btnClear =>{
    btnClear.addEventListener("click",()=>{
        display.value = " ";
        console.log(display.value);
    })
})