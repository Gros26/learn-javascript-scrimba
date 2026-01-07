let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))
    renderLeads(myLeads)
    inputEl.value = ""
})



function renderLeads(array) {
    let listItems = ""
    // array.forEach(e => listItems += "<li>" + "<a href='" + e +"' target='_blank'>" + e + "</a>" + "</li>")
    array.forEach(e => listItems += 
        `<li>
            <a href='${e}' target='_blank'>
                ${e}
            </a>
        </li>`)
    ulEl.innerHTML = listItems
}

