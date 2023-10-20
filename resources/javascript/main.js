const addBtn = document.querySelector("#add__btn");
const resetBtn = document.querySelector("#reset__btn");
const inputName = document.querySelector("#input__name");
const inputNumber = document.querySelector("#input__number");
const inputInfo = document.querySelector("#input__info");
const contactList = document.querySelector("ul");
const alertSpace = document.querySelector(".alert__space");
const phoneNumber = document.querySelector("#phone__number");
const dropDown = document.querySelector(".emergency__numbers select");

resetBtn.addEventListener("click", clearContacts);

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

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", deleteContact);

    contactList.append(contactLi);
    contactLi.append(contactInputName);
    contactLi.append(contactInputNumber);
    contactLi.append(contactInputInfo);
    contactLi.append(editBtn);
    contactLi.append(deleteBtn);
  }
  clearInputFields();
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

function clearInputFields() {
  inputName.value = "";
  inputNumber.value = "";
  inputInfo.value = "";
}

function clearContacts() {
  contactList.innerHTML = "";
}

function checkIfEmpty(firstValue, secondValue) {
  return firstValue == "" || secondValue == "";
}

function notAllowed() {
  alertSpace.innerHTML = "";
  let alert = document.createElement("h4");
  alert.style.margin = "0";
  alert.innerText = "Please enter name and number!";
  alertSpace.append(alert);
}

function deleteContact(e) {
  e.target.parentNode.innerHTML = "";
}

function editContact(e) {
  if (e.target.parentNode.children[0].disabled === true) {
    e.target.parentNode.children[0].disabled = false;
    e.target.parentNode.children[1].disabled = false;
    e.target.parentNode.children[2].disabled = false;
    e.target.innerText = "Save";
    e.target.parentNode.children[0].style.backgroundColor = "black";
    e.target.parentNode.children[0].style.color = "#d3efbd";
    e.target.parentNode.children[1].style.backgroundColor = "black";
    e.target.parentNode.children[1].style.color = "#d3efbd";
    e.target.parentNode.children[2].style.backgroundColor = "black";
    e.target.parentNode.children[2].style.color = "#d3efbd";
    e.target.style.backgroundColor = "black";
    e.target.style.color = "#d3efbd";
  } else {
    if (
      checkIfEmpty(
        e.target.parentNode.children[0].value,
        e.target.parentNode.children[1].value
      )
    ) {
      notAllowed();
    } else {
      alertSpace.innerHTML = "";
      e.target.parentNode.children[0].disabled = true;
      e.target.parentNode.children[1].disabled = true;
      e.target.parentNode.children[2].disabled = true;
      e.target.innerText = "Edit";
      e.target.parentNode.children[0].style.backgroundColor = "#d3efbd";
      e.target.parentNode.children[0].style.color = "black";
      e.target.parentNode.children[1].style.backgroundColor = "#d3efbd";
      e.target.parentNode.children[1].style.color = "black";
      e.target.parentNode.children[2].style.backgroundColor = "#d3efbd";
      e.target.parentNode.children[2].style.color = "black";
      e.target.style.removeProperty("background-color");
      e.target.style.removeProperty("color");
    }
  }
}
