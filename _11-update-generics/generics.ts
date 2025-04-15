type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string> = {};
store.name = "TOTO";

function merge<T>(value: T): T {
  return value;
}

const numberValue = merge<number>(45);
const stringValues = merge<string>("Hello");

function longLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

longLength("Hello");
longLength([1, 2, 3]);
