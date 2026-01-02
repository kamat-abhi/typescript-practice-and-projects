import type { StorageService as IStorageService } from "../interfaces/StorageService.js";
import type { Expense as IExpense } from "../interfaces/Expense.js";
import { Expense } from "../models/Expense.model.js";

export class LocalStorageService implements IStorageService {
  private key = "expenses";

  save(expenses: IExpense[]): void {
    localStorage.setItem(this.key, JSON.stringify(expenses));
  }

  load(): Expense[] {
    const raw = localStorage.getItem(this.key);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    const expenses = parsed.map(
      (e: any) => new Expense(e.type, e.description, e.amount, e.id)
    );

    Expense.currentId = Math.max(...expenses.map((e: any) => e.id), 0);
    return expenses;
  }
}
