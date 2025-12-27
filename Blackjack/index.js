let firstCard = 11
let secondCard = 14
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

console.log(sum)

if (sum < 21) {
    message = "Do you want to draw a new card? 😬"
} else if (sum === 21) {
    hasBlackJack = true
    message = "You've got a blackjack! 🥳"
} else {
    isAlive = false
    message = "You're out of the game! 😭"
}

console.log(message)
console.log(hasBlackJack)
console.log(isAlive)


