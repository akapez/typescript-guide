// A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

function Logger(constructor: Function) {
  console.log("logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("creating person object...");
  }
}

const person = new Person();
console.log(person);

//decorator factories
function Speed(value: string) {
  // this is the decorator factory, it sets up
  // the returned decorator function
  return function (constructor: Function) {
    // this is the decorator
    // do something with 'target' and 'value'...
    console.log(value);
    console.log(constructor);
  };
}

//template factories
function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

@Speed("SP-METER")
@WithTemplate("<h1>Speed Calculation</h2>", "app")
class Vehicle {
  name = "Volvo";

  constructor() {
    console.log("Speed test...");
  }
}

const vehicle = new Vehicle();
console.log(vehicle);

//property decorator
function Log(target: any, propertyName: string | symbol) {
  console.log("Property Decorator...");
  console.log(target, propertyName);
}

//access decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Access decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

//method decorator
function Log3(target: any, name: string | symbol, descriptor: PropertyDescriptor) {
  console.log("Method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

//parameter decorator
function Log4(target: any, name: string | symbol, position: number) {
  console.log("Parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

//autobind decorator

function AutoBind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";
  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;

button.addEventListener("click", p.showMessage);

//validation with decorator

interface ValidateConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidateConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), "required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), "positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required title: string;
  @PositiveNumber price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("Invalid input");
  }
  console.log(createdCourse);
});
