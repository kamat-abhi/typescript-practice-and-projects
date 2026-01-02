import { Expense } from "../models/Expense.model.js";
import { UIManager } from "../ui/UIManager.js";
export class ExpenseTracker {
    storage;
    ui;
    expenses = [];
    constructor(storage, ui) {
        this.storage = storage;
        this.ui = ui;
        this.expenses = storage.load();
    }
    init() {
        this.expenses.forEach(e => this.ui.renderExpense(e));
        this.updateTotal();
        document.addEventListener("click", (e) => {
            const target = e.target;
            if (target.classList.contains("delete-expense")) {
                this.deleteExpense(+target.dataset.id);
            }
        });
    }
    addExpense(type, desc, amt) {
        const exp = new Expense(type, desc, amt);
        this.expenses.push(exp);
        this.storage.save(this.expenses);
        this.ui.renderExpense(exp);
        this.updateTotal();
    }
    deleteExpense(id) {
        this.expenses = this.expenses.filter(e => e.id !== id);
        this.storage.save(this.expenses);
        this.ui.removeExpense(id);
        this.updateTotal();
    }
    updateTotal() {
        const total = this.expenses.reduce((sum, e) => sum + e.signedAmount, 0);
        this.ui.showTotal(total);
    }
}
//# sourceMappingURL=ExpenseTracker.js.map