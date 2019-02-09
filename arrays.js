var array = "Ned Jon Robb Bran Rickson".split(' ');


console.log(array.toString());
console.log(array.join(' / '));

array.push("Sansa");

console.log(array);

array.unshift("Sansa");

console.log(array);


var elemento = array.pop();
elemento = array.pop();;

console.log(array + " -- " + elemento);

console.log(array);

elemento = array.shift();
console.log(array);


array[1] = "Jon Snow";

console.log(array);

var slice = array.slice(2, 3);

console.log(slice);

console.log(array);

array.splice(1, 1, "Arya", "Sansa");
console.log(array);


array.splice(3, 1);

console.log(array);

array = array.concat(slice);


console.log(array);