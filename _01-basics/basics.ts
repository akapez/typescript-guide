//strings, numbers and boolean

function add(n1: number, n2: number, showResult: boolean, msg: string) {
  if (showResult) return n1 + n2;
  else return msg;
}

console.log(add(2, 3, false, "code block"));

//type assignment and type inference
let number1: number;
number1 = 1;

let number2 = 2;
const msg = "hello world!";
