// Refer to Task 4 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const name = prompt("¿Cuál es tu nombre? ");
console.log("Programa fizzbuzz para " + name);
for (let i = 1; i <= 105; i++) {
  if (i % 3 ===0 && i % 5 ===0 && i % 7 ===0) {
    console.log("fizzbuzzwoof");
  } else if (i % 3 ===0 && i % 5 ===0) {
    console.log("fizzbuzz");
  } else if (i % 3 ===0) {
    console.log("fizz");
  } else if (i % 5 ===0) {
    console.log("buzz");
  } else if (i % 7 ===0) {
    console.log("woof");
  } else {
    console.log(i);
  }
}