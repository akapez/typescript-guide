//union types: used when a value can be more than a single type.

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(20, 34);
console.log(combineAges);

const combineNames = combine("John", "Julia");
console.log(combineNames);

//literal type: literal types let you create types that express specific values.

function printStatus(status: "success" | "failure") {
  console.log(`Status is: ${status}`);
}

printStatus("success");

//type aliases/ custom types

type name = string;
type price = number;
type inStock = boolean;
type color = "black" | "blue" | "white";

type Product = {
  name: name;
  price: price;
  isStock: inStock;
  color: color;
};

const product: Product = {
  name: "IPhone",
  price: 2000,
  isStock: true,
  color: "black",
};

console.log(product);

type User = { name: string } | string;

let u1: User = { name: "max" };
u1 = "Sam";

console.log(u1);
