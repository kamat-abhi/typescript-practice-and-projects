export class UIManager {
    debitDiv;
    creditDiv;
    totalDiv;
    constructor(debitDiv, creditDiv, totalDiv) {
        this.debitDiv = debitDiv;
        this.creditDiv = creditDiv;
        this.totalDiv = totalDiv;
    }
    renderExpense(exp) {
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
        const newItem = container.lastElementChild;
        setTimeout(() => newItem.classList.add("show"), 10);
    }
    removeExpense(id) {
        document.querySelector(`.exp-item[data-id="${id}"]`)?.remove();
    }
    showTotal(total) {
        if (total > 0)
            this.totalDiv.textContent = `😎 Balance: ${total} Rs`;
        else if (total < 0)
            this.totalDiv.textContent = `😱 Balance: ${total} Rs`;
        else
            this.totalDiv.textContent = `😐 Balance: ${total} Rs`;
    }
}
//# sourceMappingURL=UIManager.js.map