"use strict";
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let age;
age = 30;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// console.log('ID:', id);
// Tuple
let person = [1, 'Ivan', true];
// Tuple Array
let employee;
employee = [
    [1, 'Ivan'],
    [1, 'Irina'],
    [1, 'Lidiya'],
];
// Union
let pid;
pid = 22;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const p1 = 1;
// Classes
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Irina', 'Developer');
console.log(emp.name, emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Ivan', 'Irina', 'Chad']);
