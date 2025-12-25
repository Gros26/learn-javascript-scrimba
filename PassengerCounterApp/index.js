// document.getElementById("count-el").innerText = 5

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let entries = ""


function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    entries = count + " - "
    saveEl.textContent += entries
    reset()
}

function reset() {
    count = 0
    countEl.innerText = count
}

