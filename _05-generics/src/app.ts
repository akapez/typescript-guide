//Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

//Generics types helps when we have type that actually works together with multiple other possible types

//constraint refers to the restrictions or conditions imposed on generic type parameters. Constraints are used to ensure that a generic type parameter extends a specific type or interface, which allows you to use certain properties or methods on that type parameter within the generic function, class, or interface. To define a constraint in TypeScript, you use the 'extends' keyword.

const names: Array<string> = ["Max", "Sam"];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Max" }, { age: 20 });
console.log(mergeObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there"));

//keyof
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ age: 10 }, "age");

//generic classes
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Peter");
textStorage.removeItem("Max");
console.log(textStorage);

//utility types

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

//partial
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

//readonly
const users: Readonly<string[]> = ["Max", "Sam"];
