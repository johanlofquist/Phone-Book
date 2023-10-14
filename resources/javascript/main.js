let addBtn = document.querySelector("#add__btn");
let resetBtn = document.querySelector("#reset__btn");

resetBtn.addEventListener("click", function (e) {
  contactList.innerHTML = "";
});

let inputName = document.querySelector("#input__name");
let inputNumber = document.querySelector("#input__number");
let inputInfo = document.querySelector("#input__info");

let contactList = document.querySelector("ul");
let contacts = [];

addBtn.addEventListener("click", function (e) {
  alertSpace.innerHTML = "";
  if (inputName.value == "" || inputNumber.value == "") {
    notAllowed();
  } else {
    let contactLi = document.createElement("li");
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
    editBtn.className = "edit__btn"
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    editBtn.addEventListener("click", function (e) {
      if (contactInputName.disabled === true) {
        contactInputName.disabled = false;
        contactInputNumber.disabled = false;
        contactInputInfo.disabled = false;
        editBtn.innerText = "Save";
        e.target.parentNode.children[0].style.backgroundColor = "black" 
        e.target.parentNode.children[0].style.color = "#d3efbd" 
        e.target.parentNode.children[1].style.backgroundColor = "black" 
        e.target.parentNode.children[1].style.color = "#d3efbd" 
        e.target.parentNode.children[2].style.backgroundColor = "black" 
        e.target.parentNode.children[2].style.color = "#d3efbd" 

      } else {
        if (contactInputName.value == "" || contactInputNumber.value == "") {
          notAllowed();
        } else {
          alertSpace.innerHTML = "";
          contactInputName.disabled = true;
          contactInputNumber.disabled = true;
          contactInputInfo.disabled = true;
          editBtn.innerText = "Edit";
          e.target.parentNode.children[0].style.backgroundColor = "#d3efbd"
          e.target.parentNode.children[0].style.color = "black"
          e.target.parentNode.children[1].style.backgroundColor = "#d3efbd" 
          e.target.parentNode.children[1].style.color = "black" 
          e.target.parentNode.children[2].style.backgroundColor = "#d3efbd" 
          e.target.parentNode.children[2].style.color = "black" 
        }
      }
    });

    deleteBtn.addEventListener("click", function (e) {
      e.target.parentNode.innerHTML = "";
    });

    contactList.append(contactLi);
    contactLi.append(contactInputName);
    contactLi.append(contactInputNumber);
    contactLi.append(contactInputInfo);
    contactLi.append(editBtn);
    contactLi.append(deleteBtn);
  }
  inputName.value = ""
  inputNumber.value = ""
  inputInfo.value = ""
});

let alertSpace = document.querySelector(".alert__space");

function notAllowed() {
  alertSpace.innerHTML = "";
  let alert = document.createElement("h4");
  alert.style.margin = "0";
  alert.innerText = "Please enter name and number!";
  alertSpace.append(alert);
}


