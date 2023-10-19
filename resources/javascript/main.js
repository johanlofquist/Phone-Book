let addBtn = document.querySelector("#add__btn");
let resetBtn = document.querySelector("#reset__btn");
let inputName = document.querySelector("#input__name");
let inputNumber = document.querySelector("#input__number");
let inputInfo = document.querySelector("#input__info");
let contactList = document.querySelector("ul");
let alertSpace = document.querySelector(".alert__space");
let phoneNumber = document.querySelector("#phone__number");
let dropDown = document.querySelector(".emergency__numbers select");

resetBtn.addEventListener("click", clearContacts);

function clearContacts() {
contactList.innerHTML = "";
}

addBtn.addEventListener("click", function (e) {
  alertSpace.innerHTML = "";
  if (checkIfEmpty(inputName.value, inputNumber.value)) {
    notAllowed();
  } else {
    let contactLi = document.createElement("li");
    setTimeout(() => {
      contactLi.id = "show";
    }, 10);
    let contactInputName = document.createElement("input");
    contactInputName.type = "text";
    contactInputName.disabled = true;
    contactInputName.value = inputName.value;

    let contactInputNumber = document.createElement("input");
    contactInputNumber.type = "text";
    contactInputNumber.disabled = true;
    contactInputNumber.value = inputNumber.value;

    let contactInputInfo = document.createElement("input");
    contactInputInfo.type = "text";
    contactInputInfo.disabled = true;
    contactInputInfo.value = inputInfo.value;

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit__btn";

    
    editBtn.addEventListener("click", editContact);
    

    function editContact(e) {
      if (contactInputName.disabled === true) {
        contactInputName.disabled = false;
        contactInputNumber.disabled = false;
        contactInputInfo.disabled = false;
        editBtn.innerText = "Save";
        e.target.parentNode.children[0].style.backgroundColor = "black";
        e.target.parentNode.children[0].style.color = "#d3efbd";
        e.target.parentNode.children[1].style.backgroundColor = "black";
        e.target.parentNode.children[1].style.color = "#d3efbd";
        e.target.parentNode.children[2].style.backgroundColor = "black";
        e.target.parentNode.children[2].style.color = "#d3efbd";
        editBtn.style.backgroundColor = "black";
        editBtn.style.color = "#d3efbd";
      } else {
        if (checkIfEmpty(contactInputName.value, contactInputNumber.value)) {
          notAllowed();
        } else {
          alertSpace.innerHTML = "";
          contactInputName.disabled = true;
          contactInputNumber.disabled = true;
          contactInputInfo.disabled = true;
          editBtn.innerText = "Edit";
          e.target.parentNode.children[0].style.backgroundColor = "#d3efbd";
          e.target.parentNode.children[0].style.color = "black";
          e.target.parentNode.children[1].style.backgroundColor = "#d3efbd";
          e.target.parentNode.children[1].style.color = "black";
          e.target.parentNode.children[2].style.backgroundColor = "#d3efbd";
          e.target.parentNode.children[2].style.color = "black";
          editBtn.style.removeProperty("background-color");
          editBtn.style.removeProperty("color");
        }
      }
    }
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    
    deleteBtn.addEventListener("click", deleteContact);
    
    function deleteContact(e) {
      e.target.parentNode.innerHTML = "";
    }
    contactList.append(contactLi);
    contactLi.append(contactInputName);
    contactLi.append(contactInputNumber);
    contactLi.append(contactInputInfo);
    contactLi.append(editBtn);
    contactLi.append(deleteBtn);
  }
  inputName.value = "";
  inputNumber.value = "";
  inputInfo.value = "";
});

dropDown.addEventListener("change", function () {
  if (dropDown.value == "Sweden") {
    phoneNumber.innerText = "112";
  } else if (dropDown.value == "USA") {
    phoneNumber.innerText = "911";
  } else if (dropDown.value == "Ghana") {
    phoneNumber.innerText = "999";
  } else if (dropDown.value == "Australia") {
    phoneNumber.innerText = "000";
  } else if (dropDown.value == "Colombia") {
    phoneNumber.innerText = "123";
  }
});

function checkIfEmpty(firstValue, secondValue) {
  if(firstValue == "" || secondValue == "") {
    return true
  } else {
    return false
  }
}

function notAllowed() {
  alertSpace.innerHTML = "";
  let alert = document.createElement("h4");
  alert.style.margin = "0";
  alert.innerText = "Please enter name and number!";
  alertSpace.append(alert);
}
