import type { Expense } from "../models/Expense.model.js";

export interface StorageService {
  save(expenses: Expense[]): void;
  load(): Expense[];
}
