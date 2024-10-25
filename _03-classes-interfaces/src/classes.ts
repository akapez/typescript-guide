// static method: A method call directly on a class, not on an object created based on it.
// inheritance: Inheritance allows you to share some common functionality and yet create more specialized blueprints.
// abstract class: A class that can't be instantiated but has to be extended.
//singleton classes: Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

abstract class Department {
  // private name: string;
  static fiscalYear = 2024;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // console.log(Department.fiscalYear);
  }

  //static methods
  static createEmployee(name: string) {
    return { name: name };
  }

  // describe(this: Department) {
  //   console.log(`Department: ${this.id} ` + this.name);
  // }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

//inheritance
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`IT Department: ${this.id} ` + this.id);
  }
}

class AccountDepartment extends Department {
  private lastReport: string;
  private static instance: AccountDepartment;

  //getters
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found!");
  }

  //setters
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value..");
    }
    this.addReports(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log(`Account Department: ${this.id} ` + this.id);
  }

  //overriding properties  (Protected) modifier
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("John");
console.log(employee1, Department.fiscalYear);

// const account = new Department("d1", "Accounting");
// account.addEmployee("Max");
// account.addEmployee("Sam");
// account.describe();
// account.printEmployeeInfo();
// console.log(account);

const ict = new ITDepartment("d2", ["Max"]);
ict.describe();
ict.printEmployeeInfo();
console.log(ict);

// const accountDep = new AccountDepartment("d3", []);
const accountDep = AccountDepartment.getInstance();
accountDep.mostRecentReport = "RP001";
accountDep.addReports("Report1");
console.log(accountDep.mostRecentReport);

accountDep.printReports();
accountDep.addEmployee("Max");
accountDep.addEmployee("Mark");
accountDep.printEmployeeInfo();

console.log(accountDep);

accountDep.describe();

// account.employees
// account.name = "IT";
// const accountCopy = { name: "DUMMY", describe: account.describe };
// accountCopy.describe();
