
let num1 = 8
let num2 = 2

let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")
let sumEl = document.getElementById("sum-el")

num1El.textContent = num1
num2El.textContent = num2


function add() {
    sumEl.textContent = Number(num1El.textContent) + Number(num2El.textContent)
}

function subtract() {
    sumEl.textContent = Number(num1El.textContent) - Number(num2El.textContent)
}

function divide() {
    sumEl.textContent = Number(num1El.textContent) / Number(num2El.textContent) 
}

function multiply() {
    sumEl.textContent = Number(num1El.textContent) * Number(num2El.textContent)
}