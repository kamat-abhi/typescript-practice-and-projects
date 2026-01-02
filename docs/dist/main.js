import { LocalStorageService } from "./services/LocalStorageService.js";
import { UIManager } from "./ui/UIManager.js";
import { ExpenseTracker } from "./controllers/ExpenseTracker.js";
const expType = document.querySelector("#expense-type");
const expDesc = document.querySelector("#desc");
const expAmt = document.querySelector("#amount");
const addBtn = document.querySelector(".add-expense-btn");
const debitDiv = document.querySelector(".expense-debit-item-container");
const creditDiv = document.querySelector(".expense-credit-item-container");
const totalDiv = document.querySelector(".total-expense-amount");
const storage = new LocalStorageService();
const ui = new UIManager(debitDiv, creditDiv, totalDiv);
const tracker = new ExpenseTracker(storage, ui);
tracker.init();
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    tracker.addExpense(expType.value, expDesc.value, +expAmt.value);
    expDesc.value = "";
    expAmt.value = "";
});
//# sourceMappingURL=main.js.map