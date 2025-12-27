let firstCard = -1
let secondCard = 0
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

console.log(sum)

if (sum < 21) {
    console.log("Do you want to draw a new card? 😬")
} else if (sum === 21) {
    hasBlackJack = true
    console.log("You've got a blackjack! 🥳")
} else {
    isAlive = false
    console.log("You're out of the game! 😭")
}

console.log(hasBlackJack)
console.log(isAlive)


