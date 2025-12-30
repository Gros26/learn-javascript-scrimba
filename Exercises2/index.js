let person = {
    name: "Gros",
    age: 10,
    country: "Colombia",
    
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()

///////////

let largestCountries = ['China', 'India', 'United States', 'Indionesia', 'Pakistan']

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

printArray(largestCountries)


////////

let largeCountries = ['Tuvalu', 'India', 'United States', 'Indionesia', 'Monaco']

largeCountries.shift()
largeCountries.unshift('China')
largeCountries.pop()
largeCountries.push('Pakistan')

printArray(largeCountries)


/////

let hands = ['rock', 'paper', 'scissor']

function returnRandomHand() {
    let random = Math.floor(Math.random() * 3)
    console.log(random)
    return hands[random]
}

console.log(returnRandomHand())
console.log(returnRandomHand())
console.log(returnRandomHand())
