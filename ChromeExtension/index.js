let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads(myLeads)
    inputEl.value = ""
})



function renderLeads(array) {
    let listItems = ""
    array.forEach(e => listItems += "<li>" + "<a href='" + e +"' target='_blank'>" + e + "</a>" + "</li>")
    console.log(listItems)
    ulEl.innerHTML = listItems
}

