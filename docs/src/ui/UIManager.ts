import type { Expense as IExpense } from "../interfaces/Expense.js";

export class UIManager {
  constructor(
    private debitDiv: HTMLDivElement,
    private creditDiv: HTMLDivElement,
    private totalDiv: HTMLDivElement
  ) {}

  renderExpense(exp: IExpense) {
    const container = exp.type === "credit" ? this.creditDiv : this.debitDiv;
    const icon = exp.type === "credit" ? "💰" : "💸";
    const sign = exp.type === "credit" ? "+" : "-";

    const html = `
    <div class="exp-item ${exp.type}" data-id="${exp.id}">
      <div class="exp-icon">${icon}</div>
      <div class="exp-details">
        <div class="exp-desc">${exp.description}</div>
        <div class="exp-amount">${sign}${exp.amount} Rs</div>
      </div>
      <div class="exp-delete">
        <button class="delete-expense" data-id="${exp.id}" title="Delete">🗑️</button>
      </div>
    </div>`;
    container.insertAdjacentHTML("beforeend", html);
    const newItem = container.lastElementChild as HTMLElement;
    setTimeout(() => newItem.classList.add("show"), 10);
  }
  removeExpense(id: number) {
    document.querySelector(`.exp-item[data-id="${id}"]`)?.remove();
  }
  showTotal(total: number) {
    if (total > 0) this.totalDiv.textContent = `😎 Balance: ${total} Rs`;
    else if (total < 0) this.totalDiv.textContent = `😱 Balance: ${total} Rs`;
    else this.totalDiv.textContent = `😐 Balance: ${total} Rs`;
  }
}
