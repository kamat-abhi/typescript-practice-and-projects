"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
const expType = document.querySelector("#expense-type");
const expDesc = document.querySelector("#desc");
const expAmt = document.querySelector("#amount");
const addExpBtn = document.querySelector(".add-expense-btn");
const debitDiv = document.querySelector(".expense-debit-item-container");
const creditDiv = document.querySelector(".expense-credit-item-container");
const totalAmtDiv = document.querySelector(".total-expense-amount");
class Expense {
    type;
    description;
    amount;
    static currentId = 0;
    id;
    constructor(type, description, amount) {
        this.type = type;
        this.description = description;
        this.amount = amount;
        this.id = ++Expense.currentId;
    }
}
let expenseItems = [];
let totalAmount = 0;
function deleteExpense(id) {
    expenseItems = expenseItems.filter((exp) => exp.id !== id);
    document.querySelector(`.exp-item[data-id="${id}"]`)?.remove();
    totalAmount = calculateTotal();
    showTotal();
}
function renderExpense(expItem) {
    const containerDiv = expItem.type === "credit" ? creditDiv : debitDiv;
    const template = `
    <div class="exp-item" data-id="${expItem.id}">
      <div class="exp-desc">${expItem.description}</div>
      <div class="exp-amount">${expItem.amount}</div>
      <div class="exp-delete">
        <button class="delete-expense" data-id="${expItem.id}">❌</button>
      </div>
    </div>
  `;
    containerDiv.insertAdjacentHTML("beforeend", template);
    requestAnimationFrame(() => {
        containerDiv.lastElementChild?.classList.add("show");
    });
}
document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("delete-expense")) {
        deleteExpense(+target.dataset.id);
    }
});
function calculateTotal() {
    return expenseItems.reduce((total, exp) => {
        let amount = exp.type === "credit" ? exp.amount : -exp.amount;
        total += amount;
        return total;
    }, 0);
}
function showTotal() {
    if (totalAmount > 0) {
        totalAmtDiv.textContent = `😎 Balance: ${totalAmount} Rs..`;
    }
    else if (totalAmount < 0) {
        totalAmtDiv.textContent = `😱 Balance: ${totalAmount} Rs..`;
    }
}
addExpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let type = expType.value === "credit" ? "credit" : "debit";
    const exp = new Expense(type, expDesc.value, +expAmt.value);
    expenseItems.push(exp);
    renderExpense(exp);
    expDesc.value = "";
    expAmt.value = "";
    totalAmount = calculateTotal();
    showTotal();
});
//# sourceMappingURL=app.js.map