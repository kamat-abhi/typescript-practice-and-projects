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

# Models

This folder contains data models of the application.

- Expense.ts: Represents an expense object with id, description, amount, and type.

**SOLID principles followed:**

- SRP: Expense class has only one responsibility: storing expense data.
- OCP: Models can be extended without changing other code.

**Reason**

- SOLID Principle: Single Responsibility (S)
- Expense is just a data container; it has no business logic or UI code.
- Keeps data separate from logic → easier to maintain.

# Services

This folder contains external helpers and services, such as storage or API calls.

- LocalStorageService.ts: Implements IStorageService to save/load expenses in localStorage.

**SOLID principles followed:**

- SRP: Service only handles data persistence.
- DIP: Controller depends on interface, not the concrete service.
- OCP: New storage services can be added without changing controller logic.

**Reason**

- SOLID Principle: SRP + DIP + OCP
- All storage logic is in one place.
- Controller depends on IStorageService, not on localStorage directly.
- Can replace LocalStorageService with ApiStorageService in future without changing controller.

# UI

This folder contains classes that handle DOM manipulation.

- UIManager.ts: Handles rendering expenses, updating credit/debit lists, and balance display.

**SOLID principles followed:**

- SRP: UIManager only handles view rendering.
- OCP: UI changes debit container and credit container do not affect controller or services.

**Reason**

- SOLID Principle: SRP
- All DOM manipulation is in one place.
- UIManager only renders data, does not calculate balances or save to storage.
