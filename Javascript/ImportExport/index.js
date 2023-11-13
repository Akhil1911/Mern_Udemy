// import { num1, num2, num3 } from "./first.js";
// import num4 from "./first.js";
import * as all from "./first.js";
let { num1, num2, num3 } = all;
let num4 = all.default;
console.log(num1 + " " + num2 + " " + num3 + " " + num4);