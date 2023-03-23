// DOM
let productNameInput = document.querySelector("#productNameInput");
let productPriceInput = document.querySelector("#productPriceInput");
let addBtn = document.querySelector("#addBtn");
let budgetDisplay = document.querySelector("#budgetDisplay");
let remainingDisplay = document.querySelector("#remainingDisplay");
let allItems = document.querySelector("#allItems");
// prompt
let msg = Number(prompt("write your budget here "));
let newRema = msg;
budgetDisplay.innerHTML = `${msg}`;
remainingDisplay.innerHTML = `${newRema}`;
// add btn event 
addBtn.addEventListener("click", function () {
  allItems.innerHTML += `<li class=" border border-bottom d-flex justify-content-between ">${productNameInput.value}<p> ${productPriceInput.value} </p><button class="removeBtn bg-primary  border-0 w-25 text-white"> <i class="fa-solid fa-xmark"></i></button></li>`;
  budgetRemove();
  productNameInput.value = "";
  productPriceInput.value = "";
  removeLi();
});
// remove money from the budget
function budgetRemove() {
  newRema = msg - Number(productPriceInput.value);
// back calc
  msg = msg - Number(productPriceInput.value);
  remainingDisplay.innerHTML = newRema;
  //  minus alert
  if (newRema < 0) {
    alert("you in minus stupid ass nigga");
  }
}

// remove li function
function removeLi() {
  let arrBtn = document.querySelectorAll(".removeBtn");
  console.log(arrBtn);
  arrBtn.forEach(function (item) {
    item.addEventListener("click", function (e) {
     // li remove
      e.target.parentElement.remove();
      calc(e);
    });
  });
}
// calculation function
function calc(e){   
    // p remove
    let backCash = Number(e.target.parentElement.firstChild.nextSibling.innerText) ;
    newRema = msg + backCash;
    msg = msg  + backCash;
    remainingDisplay.innerHTML = newRema;
}


