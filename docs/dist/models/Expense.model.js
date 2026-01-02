export class Expense {
    type;
    description;
    amount;
    static currentId = 0;
    id;
    constructor(type, description, amount, id) {
        this.type = type;
        this.description = description;
        this.amount = amount;
        this.id = id ?? ++Expense.currentId;
    }
    get signedAmount() {
        return this.type === "credit" ? this.amount : -this.amount;
    }
}
//# sourceMappingURL=Expense.model.js.map