// document.getElementById("count-el").innerText = 5

let count = 0
let countEl = document.getElementById("count-el")

console.log(countEl)

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}

