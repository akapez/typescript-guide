//object types

// const person: { name: string; age: number } = {
//   name: "Max",
//   age: 30,
// };

const person = {
  name: "Max",
  age: 30,
};

console.log(person.name);

const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

console.log(product.details.title);

//arrays
let books: string[];
books = ["To Kill a Mockingbird", "The Great Gatsby"];

//tuple: A tuple is a typed array with a pre-defined length and types for each index
let mixTuple: [number, boolean, string];
mixTuple = [5, false, "Monday"];

//enum: An enum is a special "class" that represents a group of constants (unchangeable variables).

//default values
// ADMIN = 0,
// AUTHOR = 1,
// READ_ONLY = 2,

//strings values
// enum Role {
//   ADMIN = "ADMIN",
//   AUTHOR = "AUTHOR",
//   READ_ONLY = "READ_ONLY",
// }

enum Role {
  ADMIN = 100,
  AUTHOR = 50,
  READ_ONLY = 1,
}

const user = {
  name: "Sam",
  role: Role.AUTHOR,
};

console.log(user);
