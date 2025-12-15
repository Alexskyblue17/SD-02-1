// Refer to Task 2 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const name = prompt("¿Cuál es tu nombre? ");
console.log("Programa fizzbuzz para " + name);
for (let i = 1; i <= 105; i++) {
  if (i % 3 ===0) {
    console.log("fizz");
  } else {
    console.log(i);
  }}