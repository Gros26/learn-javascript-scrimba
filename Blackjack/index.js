let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

console.log(sum)

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el") es equivalente, querySelector es mas flexible
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum 
    
    if (sum < 21) {
    message = "Do you want to draw a new card? 😬"
    } else if (sum === 21) {
        hasBlackJack = true
        message = "You've got a blackjack! 🥳"
    } else {
        isAlive = false
        message = "You're out of the game! 😭"
    }

    messageEl.textContent = message
    console.log(hasBlackJack)
    console.log(isAlive)
}







