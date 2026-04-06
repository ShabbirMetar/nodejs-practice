// there are many ways to import the modules

// //way 1 : "type":"commonjs"
// const math = require("./math");
// console.log(math);//{ addFn: [Function: add], subFn: [Function: sub] }

// way 2 : "type":"module"

// import should be at the top of the file

import greet from "./math.js" //one way
import {mul, div} from "./math.js" // 2nd way
import * as math from "./math.js" // 3rd way import everthing as math from math.js
console.log(math);
// [Module: null prototype] {
//   default: [Function: greet],
//   div: [Function: div],
//   mul: [Function: mul]
// }
math.default(); // hello  // calls the greet function
console.log(mul(2,3)); //6
console.log(div(2,3));//0.66666
greet();//hello