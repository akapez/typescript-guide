//interfaces: a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have.
//extends: The new class is a child. It gets benefits coming with inheritance. It has all the properties and methods of its parent. It can override some of these and implement new ones, but the parent stuff is already included.
//implements: The new class can be treated as the same "shape", but it is not a child. It could be passed to any method where Greetable is required, regardless of having a different parent than Greetable.

//function type
interface addFn {
  (a: number, b: number): number;
}

let add: addFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

// user1 = {
//   name: "Max",
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

user1 = new Person("Max");

user1.greet("Hi I'm");

console.log(user1);
