let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el") es equivalente, querySelector es mas flexible
let cardsEl = document.querySelector("#cards-el")

console.log(cards)

function startGame() {
    isAlive = true
    let aux

    for (let i = 0; i < 2; i++) {
        aux = getRandomCard()
        sum += aux
        cards.push(aux)
    }
    
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
    console.log(isAlive)
    console.log(hasBlackJack)
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    } else {
        console.log("You cannot draw a new card")
    }

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





