// class User {
//   name: string;
//   age: number;

//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }

class User {
  readonly hobbies: string[] = [];

  constructor(public name: string, private age: number) {}

  greet() {
    console.log("My age: " + this.age);
  }
}

const sam = new User("Sam", 34);

console.log(sam);
