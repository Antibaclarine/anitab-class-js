let a ="10";
// implicit coersion
// When an operation like subtraction (-), multiplication (*), division (/) or modulus (%) is performed, all the values that are not number are converted into the number data type, as these operations can be performed between numbers only. Some examples of this are shown below.
let b= a*10;
console.log(b);
console.log(typeof(b));
console.log(typeof(a*1));
console.log(typeof(+a));

// explicit
// use js method
let c = Number(a)
console.log("c",typeof(c));

let d =String(c);
console.log("d",typeof(d));

let e= new Array(d);
console.log(e);

let f="45";
console.log(parseFloat(f));

