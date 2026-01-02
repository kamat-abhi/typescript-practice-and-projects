import type {Expense} from './Expense.ts';

export interface StorageService {
    save(expenses: Expense[]): void;
    load(): Expense[];
}