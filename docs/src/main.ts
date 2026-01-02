import { LocalStorageService } from "./services/LocalStorageService.js";
import { UIManager } from "./ui/UIManager.js";
import { ExpenseTracker } from "./controllers/ExpenseTracker.js";

const expType = document.querySelector("#expense-type") as HTMLSelectElement;
const expDesc = document.querySelector("#desc") as HTMLInputElement;
const expAmt = document.querySelector("#amount") as HTMLInputElement;
const addBtn = document.querySelector(".add-expense-btn") as HTMLButtonElement;

const debitDiv = document.querySelector(".expense-debit-item-container") as HTMLDivElement;
const creditDiv = document.querySelector(".expense-credit-item-container") as HTMLDivElement;
const totalDiv = document.querySelector(".total-expense-amount") as HTMLDivElement;

const storage = new LocalStorageService();
const ui = new UIManager(debitDiv, creditDiv, totalDiv);
const tracker = new ExpenseTracker(storage, ui);

tracker.init();

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  tracker.addExpense(
    expType.value as "credit" | "debit",
    expDesc.value,
    +expAmt.value
  );
  expDesc.value = "";
  expAmt.value = "";
});
