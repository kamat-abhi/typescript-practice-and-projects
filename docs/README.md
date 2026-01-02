# Interfaces (Contracts)

This folder contains interfaces which act as **contracts** for the application.

- Expense.ts: Defines the properties an expense must have.
- StorageService.ts: Defines the methods any storage service must implement.

**SOLID principles followed:**

- DIP: Controllers depend on interfaces, not concrete classes.
- OCP: New storage services can be added without modifying controllers.

**Reason: **

- SOLID Principle: Dependency Inversion (D) + Open/Closed (O)

- Controller can depend on interfaces, not concrete implementations.

- Makes it easy to replace storage or expense structure later without changing the controller.
