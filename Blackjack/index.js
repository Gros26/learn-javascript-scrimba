let firstCard = getRandomCard()
let secondCard = getRandomCard()
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

    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

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
}

function newCard() {

    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()

}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13 ) + 1
    
    if(randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}





