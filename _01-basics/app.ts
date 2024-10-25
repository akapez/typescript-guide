//function return types and void
function add(n1: number, n2: number) {
  return n1 + n2;
}

//Void Return Type
function printResult(num: number): void {
  console.log("result: " + num);
}

printResult(add(5, 13));

//Return Type
function getTime(): number {
  return new Date().getTime();
}

console.log(getTime());

//function types and callback
//note: callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.

function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  const output = cb(result);
  return output;
}

addAndHandler(5, 10, (result) => {
  console.log(result);
});

//unknown type

// unknown: is the parent type of all other types. it's a regular type in the type system.
// any:  means "disable the type check". it's a compiler directive.

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

let vAny: any = 10; // We can assign anything to any
let vUnknown: unknown = 10; // We can assign anything to unknown just like any

let s1: string = vAny; // Any is assignable to anything
let s2: string = vUnknown; //Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method(); // Ok; anything goes with any
vUnknown.method(); //Not ok; we don't know anything about this variable

//never type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An Error Ocurred", 500);
