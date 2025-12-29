let firstCard = 3
let secondCard = 10
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el") es equivalente, querySelector es mas flexible
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
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

function newCard() {
    console.log("Drawing a new card from the deck")
    let thirdCard = 5
    cards.push(thirdCard)
    sum += thirdCard
    renderGame()

}







