// generics in typeScript = Write one function/type, make it work with any data type, while keeping type safety
/*function identity<T>(value: T): T {
  return value;
}
//Genric function (basic)
let c1 = identity<number>(10);
let c2 = identity<string>("hello");
//T = type placeholder

//Generic without explicitly passing type
identity(10);
identity("hello");

// GEneric with array
function getFirst<T1>(arr: T1[]) {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }
  return arr[0];
}

getFirst([1, 2, 3]);
getFirst(["a", "b"]);

// In-built generics in typescript
// Array<T>
let nums: Array<number> = [1, 2, 3];
//same as let nums: number[] = [1,2,3];

// Promise Generic
let p: Promise<string> = Promise.resolve("done");*/

function swap<T>(arr: T[], index1: number, index2: number): T[] {
  if (
    index1 < 0 ||
    index1 >= arr.length ||
    index2 < 0 ||
    index2 >= arr.length
  ) {
    throw new Error("Invalid index");
  }
  const temp = arr[index1]!;
  arr[index1] = arr[index2]!;
  arr[index2] = temp;

  return arr;
}
swap([1, 2, 3], 0, 2);

function expand<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

let combined = expand(
  { name: "johan", age: 28 },
  { name: "john", gende: "amle" }
);
console.log(combined, combined.name);

//generic constraints
//Generic constraints are powerful feature in TypeScript that allows you to
// define limitatins on the types of data that can be used with generic code.

function getPropValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}
getPropValue({ name: "joan", age: 28 }, "name");

//generic class
type Book = {
  name: string;
  pages: number;
  price: number;
};

type Cloth = {
  name: string;
  size: string;
  price: number;
};

class ShoppingCart<T> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
    return ("ok");
  }
  getItems() {
    return this.items;
  }
}

const bookCart = new ShoppingCart<Book>();
console.log(bookCart.addItem({ name: "A book", pages: 225, price: 20 }));
console.log(bookCart.getItems());


//why we use generic class
              