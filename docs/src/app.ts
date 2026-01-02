const expType = document.querySelector("#expense-type")! as HTMLSelectElement;
const expDesc = document.querySelector("#desc")! as HTMLInputElement;
const expAmt = document.querySelector("#amount")! as HTMLInputElement;
const addExpBtn = document.querySelector(
  ".add-expense-btn"
)! as HTMLInputElement;

const debitDiv = document.querySelector(
  ".expense-debit-item-container"
)! as HTMLDivElement;
const creditDiv = document.querySelector(
  ".expense-credit-item-container"
)! as HTMLDivElement;
const totalAmtDiv = document.querySelector(
  ".total-expense-amount"
)! as HTMLDivElement;

class Expense {
  public static currentId = 0;
  readonly id: number;

  constructor(
    public type: "credit" | "debit",
    public description: string,
    public amount: number,
    id?: number
  ) {
    this.id = id !== undefined ? id : ++Expense.currentId;
  }
}

let expenseItems: Expense[] = [];
let totalAmount: number = 0;

function saveExpenses() {
  localStorage.setItem('expenses', JSON.stringify(expenseItems));
}

function deleteExpense(id: number) {
  expenseItems = expenseItems.filter((exp) => exp.id !== id);

  document.querySelector(`.exp-item[data-id="${id}"]`)?.remove();
  totalAmount = calculateTotal();
  showTotal();
  saveExpenses();
}

function renderExpense(expItem: Expense) {
  const containerDiv = expItem.type === "credit" ? creditDiv : debitDiv;

  const icon = expItem.type === "credit" ? "💰" : "💸";
  const sign = expItem.type === "credit" ? "+" : "-";

  const template = `
    <div class="exp-item ${expItem.type}" data-id="${expItem.id}">
      <div class="exp-icon">${icon}</div>
      <div class="exp-details">
        <div class="exp-desc">${expItem.description}</div>
        <div class="exp-amount">${sign}${expItem.amount} Rs</div>
      </div>
      <div class="exp-delete">
        <button class="delete-expense" data-id="${expItem.id}" title="Delete">🗑️</button>
      </div>
    </div>
  `;

  containerDiv.insertAdjacentHTML("beforeend", template);

  requestAnimationFrame(() => {
    containerDiv.lastElementChild?.classList.add("show");
  });
}

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains("delete-expense")) {
    deleteExpense(+target.dataset.id!);
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
  } else if (totalAmount < 0) {
    totalAmtDiv.textContent = `😱 Balance: ${totalAmount} Rs..`;
  } else {
    totalAmtDiv.textContent = `😐 Balance: ${totalAmount} Rs..`;
  }
}

addExpBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let type: "credit" | "debit" =
    expType.value === "credit" ? "credit" : "debit";
  const exp = new Expense(type, expDesc.value, +expAmt.value);
  expenseItems.push(exp);

  renderExpense(exp);
  expDesc.value = "";
  expAmt.value = "";
  totalAmount = calculateTotal();
  showTotal();
  saveExpenses();
});

const saved = localStorage.getItem('expenses');
if (saved) {
  const parsed = JSON.parse(saved);
  expenseItems = parsed.map((exp: any) => new Expense(exp.type, exp.description, exp.amount, exp.id));
  Expense.currentId = Math.max(...expenseItems.map(e => e.id), 0);
  expenseItems.forEach(renderExpense);
  totalAmount = calculateTotal();
  showTotal();
}
