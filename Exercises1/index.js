/////
let firstName = "Gros"
let lastName = "Garcia V"

let fullName = firstName + " " + lastName

console.log(fullName)

/////

function greetingTO(namee) {
    console.log("Hi there, " + namee + "!")
}

greetingTO(fullName)

//////

let myPoints = 3

function add3Points() {
    myPoints += 3
    console.log(myPoints)
}

function remove1Point() {
    myPoints -= 1
    console.log(myPoints)
}

add3Points()
remove1Point()
remove1Point()
add3Points()

//////

let errorEl = document.getElementById("error")

function purchase() {
    errorEl.textContent = "Something went wrong, please try again"
}



