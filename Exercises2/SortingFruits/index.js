let fruit = ["🍎", "🍊", "🍊", "🍊", "🍎", "🍎", "🍊"]

let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

appleShelf.textContent = ""
orangeShelf.textContent = ""

let aux

function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        aux = fruit[i]
        if (aux === "🍎") {
            appleShelf.textContent += aux
        } else {
            orangeShelf.textContent += aux
        }
    }
}

sortFruit()
