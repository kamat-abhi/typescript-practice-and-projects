import { Expense } from "../models/Expense.model.js";
export class LocalStorageService {
    key = "expenses";
    save(expenses) {
        localStorage.setItem(this.key, JSON.stringify(expenses));
    }
    load() {
        const raw = localStorage.getItem(this.key);
        if (!raw)
            return [];
        const parsed = JSON.parse(raw);
        const expenses = parsed.map((e) => new Expense(e.type, e.description, e.amount, e.id));
        Expense.currentId = Math.max(...expenses.map((e) => e.id), 0);
        return expenses;
    }
}
//# sourceMappingURL=LocalStorageService.js.map