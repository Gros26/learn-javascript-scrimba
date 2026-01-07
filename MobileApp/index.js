import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getDatabase,
         ref,
         push,
         onValue } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";
import { firebaseConfig } from "./config.js";


const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const referenceInDB = ref(database, "leads")


inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value)
    inputEl.value = ""
})


deleteBtn.addEventListener("dblclick", function() {
})

onValue(referenceInDB, function(snapshot) {
    const snapshotValues = snapshot.val()
    const leads = Object.values(snapshotValues)
    renderLeads(leads)
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

