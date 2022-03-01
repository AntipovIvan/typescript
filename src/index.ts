// Basic Types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';
let age: number;
age = 30;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];
// console.log('ID:', id);

// Tuple
let person: [number, string, boolean] = [1, 'Ivan', true];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, 'Ivan'],
  [1, 'Irina'],
  [1, 'Lidiya'],
];

// Union
let pid: string | number;
pid = 22;
pid = '22';

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
console.log(Direction2.Left);

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'John',
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(1, 2));

function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

type Point = number | string;
const p1: Point = 1;

// Implements interface
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const ivan = new Person(1, 'Antipov Ivan');
const bro = new Person(2, 'Bro Chad');

// Protected and private
// protected id: number;
// private id: number;
// console.log(ivan.id);

console.log(ivan.register());
console.log(ivan, bro); //Person { id: 1, name: 'Antipov Ivan' } Person { id: 2, name: 'Bro Chad' }

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Employee(3, 'Irina', 'Developer');
console.log(emp.name, emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['Ivan', 'Irina', 'Chad']);
