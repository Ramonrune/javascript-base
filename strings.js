var s = "The winter is comming. It's really comming!";

console.log(s.length);
console.log(s.indexOf("comming"));
console.log(s.lastIndexOf("comming"));

console.log(s.slice(4, 10));
console.log(s.slice(4, -8));

console.log(s.substr(4, 6));

console.log(s.replace("winter", "summer"));
console.log(s.toUpperCase());

console.log(s.toLowerCase());

console.log(s + "!!");

console.log(s.concat("!!", "!!!!!", "?", "?"));

var s = "Ned,Jon,Robb,Sansa,Bran,Arya,Rickon";


console.log(s.split(","));