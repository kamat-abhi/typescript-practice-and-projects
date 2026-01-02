import { Expense } from "../models/Expense.model.js";
import type {StorageService as IStorageService } from "../interfaces/StorageService.js";
import { UIManager } from "../ui/UIManager.js";

export class ExpenseTracker {
  private expenses: Expense[] = [];

  constructor(
    private storage: IStorageService,
    private ui: UIManager
  ) {
    this.expenses = storage.load();
  }

  init() {
    this.expenses.forEach(e => this.ui.renderExpense(e));
    this.updateTotal();

    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("delete-expense")) {
        this.deleteExpense(+target.dataset.id!);
      }
    });
  }

  addExpense(type: "credit" | "debit", desc: string, amt: number) {
    const exp = new Expense(type, desc, amt);
    this.expenses.push(exp);

    this.storage.save(this.expenses);
    this.ui.renderExpense(exp);
    this.updateTotal();
  }

  deleteExpense(id: number) {
    this.expenses = this.expenses.filter(e => e.id !== id);
    this.storage.save(this.expenses);

    this.ui.removeExpense(id);
    this.updateTotal();
  }

  private updateTotal() {
    const total = this.expenses.reduce(
      (sum, e) => sum + e.signedAmount,
      0
    );
    this.ui.showTotal(total);
  }
}
