import type { Expense as IExpense } from "../interfaces/Expense.ts";

export class Expense implements IExpense {
    static currentId = 0;
    readonly id: number;

    constructor (
        public type: "credit" | "debit",
        public description: string,
        public amount: number,
        id?: number
    ) {
        this.id = id ?? ++Expense.currentId;
    }

    get signedAmount(): number {
        return this.type === "credit" ? this.amount : -this.amount;
    }
}