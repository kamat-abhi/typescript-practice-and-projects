export interface Expense {
  id: number;
  type: "credit" | "debit";
  description: string;
  amount: number;
}
