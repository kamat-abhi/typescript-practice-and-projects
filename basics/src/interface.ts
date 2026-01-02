/*interface User {
  firstName: string;
  lastName: string;

  greetUser(): void;
  getFullName(): string;
} //we can use interface as a type
type User2 = {
  firstName: string;
  lastName: string;

  greetUser(): void;
  getFullName(): string;
};
let user1: User;
user1 = {
  firstName: "Abhishek",
  lastName: "Kamat",
  greetUser() {
    console.log(`Hello ${this.firstName}`);
  },
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};
let user2: User2;
user2 = {
  firstName: "Pankaj",
  lastName: "Kamat",
  greetUser() {
    console.log(`Hello ${this.firstName}`);
  },
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(typeof user1 === typeof user2);
user1.greetUser();
console.log(user1.getFullName());
*/

interface User {
  firstName: string;
  lastName: string;

  greetUser(): void;
  getFullName(): string;
}

class Admin implements User {
  constructor(public firstName: string, public lastName: string) {}

  greetUser(): void {
    console.log("Hello: " + this.getFullName());
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  hello() {
    console.log("nothing");
  }
}
function display(user: User) {
  console.log(user.firstName);
  user.getFullName();
  user.greetUser();
}
const admin = new Admin("Abhishek", "kamat");
console.log(display(admin))