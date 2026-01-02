/*type stringOrNumber = string | number;

function addition(a: stringOrNumber, b: stringOrNumber) {
  if(typeof a === 'string' || typeof b === 'string'){
    return a.toString() + b.toString();
  }
  return a+b;
}

addition("hello", "world");
addition(20, 30);
addition("hello", 30);*/

/*class Animal {
  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof Woof");
  }
}

function makeCreatureSound(creature: Animal) {
  if (creature instanceof Dog) creature.bark();
  else creature.makeSound();
}

let animal = new Animal();
let dog = new Dog();

makeCreatureSound(animal);
makeCreatureSound(dog);*/

interface User {
  name: string;
  email?: string;
}

function greetUser(user: User) {
  if ("email" in user)
    console.log(`Hello ${user.name}. Your email is: ${user.email}`);
  else console.log(`Hello ${user.name.toUpperCase()}`);
}

greetUser({ name: "abhishek" });
greetUser({ name: "kamat", email: "kamat@gmail.com" });

//Discriminated Union
// Discriminated Union = Union with a common key to identify the type
//  | → either one
//  & → both together

interface circle {
  kind: "circle";
  radius: number;
}
interface square {
  kind: "square";
  length: number;
}

type shape = circle | square;

function calaArea(shape: shape) {
  /*if ("radius" in shape) {
    return 3.14 * shape.radius * shape.radius;
  } else {
    return shape.length * shape.length;
  }*/
  switch (shape.kind) {
    case "circle":
      return 3.14 * shape.radius * shape.radius;
    case "square":
      return shape.length * shape.length;
  }
}
console.log(calaArea({ length: 12, kind: "square" }));
console.log(calaArea({ radius: 12, kind: "circle" }));

interface Product {
  id: number;
  name: string;
  [prop: string]: string | number;
}

const product1: Product = {
  id: 1,
  name: "T-shirt",
  color: "Red",
  price: 123,
};


//Function overloading
// 1. Only signatures are overloaded, not the implementation.
// 2. Implementation must be single.
// 3. Implementation parameters must be compatible with all signatures (usually any or union).

function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any) {
  return a + b;
}

add(2, 3);        // number
add("a", "b");    // string
