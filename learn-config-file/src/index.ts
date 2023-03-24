/**
 * Basic Type
 */
let id: number = 5;
let company: string = "Parinya Wante";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Helo"];

/**
 * Tuple
 */
let person: [number, string, boolean] = [1, "2", true];

/**
 * Tuple Array
 */
let employee: [number, string][];

employee = [
  [1, "May"],
  [2, "Test"],
  [3, "haha"],
];

/**
 * Union
 */
let pId: string | number;
pId = 1;

/**
 * Enum
 */
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

/**
 * Objects
 */
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

/**
 * Type Assertion
 */
let cId: any = 1;
// let customerId = <number>cId;
let customerId = cId as number;

/**
 * Functions
 */
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

/**
 * Interfaces
 */
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

interface MatchFunc {
  (x: number, y: number): number;
}

const add: MatchFunc = (x: number, y: number): number => x + y;
const sub: MatchFunc = (x: number, y: number): number => x - y;

/**
 * Classes
 */
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  //   private id: number; // Can only access in this class
  //   protected id: number; // Can only access in this class
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

const brad = new Person(1, "brad");
const mike = new Person(2, "mike");

/**
 * Subclasses
 */
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Developer");

/**
 * Generics
 */
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "mike", "Jill"]);

numArray.push(2);
