let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    printArray(myLeads)
})


function printArray(array) {
    ulEl.textContent = ""
    array.forEach(e => ulEl.innerHTML += "<li>" + e + "</li>")
}