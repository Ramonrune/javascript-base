var x = 34.00;
var z = 4.56e7; //45600000
var y = 123e-6; //0.000123;

var a = 9999999999999999;
console.log(a);

var b = 0.99999999999999999;
console.log(b);

var c = 0xfff;//hex to decimal
console.log(c);

var d = 07777;//oct to decimal
console.log(d);

console.log(d.toString(16));

console.log(z);

console.log(z.toExponential(4));


console.log(y);
console.log(y.toFixed(2));

console.log((3.357).toFixed(2));

console.log((3.357).toPrecision(2));