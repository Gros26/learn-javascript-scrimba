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

for (let i = 0; i < largestCountries.length; i++) {
    console.log(largestCountries[i])
}