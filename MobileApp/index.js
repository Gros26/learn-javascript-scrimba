import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getDatabase,
         ref,
         push } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";
import { firebaseConfig } from "./config.js";


const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const refDB = ref(database, "leadsTracker")


inputBtn.addEventListener("click", function() {
    push(refDB, inputEl.value)
    console.log(inputEl.value)
    inputEl.value = ""
})


deleteBtn.addEventListener("dblclick", function() {
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

