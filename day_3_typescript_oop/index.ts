import Person from './models/Person';

let p: Person = new Person(1, 'John Doe');
console.log(p);

let a: number = 10;
let b: number = 20;
let c: number = a + b;

console.log(`The sum of a and b is: ${c}`);

const sum = (x: number, y: number): number => {
    return x + y;
};

console.log(`The sum of a and b is: ${sum(a, b)}`);