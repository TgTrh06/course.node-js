"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./models/Person");
var p = new Person_1.default(1, 'John Doe');
console.log(p);
var a = 10;
var b = 20;
var c = a + b;
console.log("The sum of a and b is: ".concat(c));
var sum = function (x, y) {
    return x + y;
};
console.log("The sum of a and b is: ".concat(sum(a, b)));
