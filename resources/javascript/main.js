let addBtn = document.querySelector("#add__btn")
let resetBtn = document.querySelector("#reset__btn")

resetBtn.addEventListener("click", function(e) {
    contactList.innerHTML = ""
})

let inputName = document.querySelector("#input__name")
let inputNumber = document.querySelector("#input__number")
let inputInfo = document.querySelector("#input__info")

let contactList = document.querySelector("ul")
let contacts = []

addBtn.addEventListener("click", function(e) {
    if (inputName.value == "" || inputNumber.value == "") {
        alert("Please fill in name and number fields.")
    } else {
    let contactLi = document.createElement("li")
    let contactInputName = document.createElement("input")
    contactInputName.type= "text"
    contactInputName.disabled = true
    contactInputName.value = inputName.value

    let contactInputNumber = document.createElement("input")
    contactInputNumber.type = "text"
    contactInputNumber.disabled = true
    contactInputNumber.value = inputNumber.value

    let contactInputInfo = document.createElement("input")
    contactInputInfo.type = "text"
    contactInputInfo.disabled = true
    contactInputInfo.value = inputInfo.value

    let editBtn = document.createElement("button")
    editBtn.innerText = "Edit"
    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"

    editBtn.addEventListener("click", function() {
        if (contactInputName.disabled === true) {
        contactInputName.disabled = false
        contactInputNumber.disabled = false
        contactInputInfo.disabled = false
        editBtn.innerText = "Save"
        } else {
            contactInputName.disabled = true
            contactInputNumber.disabled = true
            contactInputInfo.disabled = true
            editBtn.innerText = "Edit"
        }
    })

    deleteBtn.addEventListener("click", function(e) {
        e.target.parentNode.innerHTML = ""
    })
    
    
    
    
    
    
    
    contactList.append(contactLi)
    contactLi.append(contactInputName)
    contactLi.append(contactInputNumber)
    contactLi.append(contactInputInfo)
    contactLi.append(editBtn)
    contactLi.append(deleteBtn)
        


    
    
}
})

function renderList() {
    contactList.innerHTML = ""
    
    for (let i = 0; i < contacts.length; i++) {
        contactList.append(contacts[i])
    }
}