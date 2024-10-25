//function return types and void
function add(n1, n2) {
    return n1 + n2;
}
//Void Return Type
function printResult(num) {
    console.log("result: " + num);
}
printResult(add(5, 13));
//Return Type
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
//function types and callback
//note: callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.
function addAndHandler(n1, n2, cb) {
    var result = n1 + n2;
    var output = cb(result);
    return output;
}
addAndHandler(5, 10, function (result) {
    console.log(result);
});
//unknown type
// unknown: is the parent type of all other types. it's a regular type in the type system.
// any:  means "disable the type check". it's a compiler directive.
var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
var vAny = 10; // We can assign anything to any
var vUnknown = 10; // We can assign anything to unknown just like any
var s1 = vAny; // Any is assignable to anything
// let s2: string = vUnknown; Invalid; we can't assign vUnknown to any other type (without an explicit assertion)
//vAny.method(); // Ok; anything goes with any
// vUnknown.method();  Not ok; we don't know anything about this variable
//never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An Error Ocurred", 500);
