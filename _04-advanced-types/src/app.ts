type Admin = {
  name: string;
  privilege: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privilege: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "number") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEMployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEMployee) {
  console.log("Name: " + emp.name);
  //type guard
  if ("privilege" in emp) {
    console.log("Privilege: " + emp.privilege);
  }
  if ("startDate" in emp) {
    console.log("Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving... car");
  }
}

class Truck {
  drive() {
    console.log("Driving... truck");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //type guard
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

//discriminated unions

type Bird = {
  type: "bird";
  flyingSpeed: number;
};

type Horse = {
  type: "horse";
  runningSpeed: number;
};

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 2 });

//typecasting

// const userInput = <HTMLInputElement>document.getElementById("user-input");
const userInput = document.getElementById("user-input") as HTMLInputElement;

userInput.value = "Hello world";

//index properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "invalid email",
  username: "all caps",
};

//optional chaining
const fetchUser = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "Acme pvt ltd." },
};

console.log(fetchUser?.job?.title);

//nullish coalescing
const userInputData = null;
const storedData = userInputData ?? "DEFAULT";

console.log(storedData);
