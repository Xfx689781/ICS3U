const prompt = require('prompt-sync')();
console.log("1.3 - Mathematics");
let celsius = 100; //This is the third assignment, which includes four different tasks. This is the first task, where we convert degrees Celsius to Fahrenheit and output the Fahrenheit value.
let fahrenheit = 0; //We set the value of Fahrenheit to be 0 at first in order to declare the variable.
celsius += 2; //We add 2 to the original Celsius value, where "x += y" means to add y to x. Now the value of Celsius is 102. 
fahrenheit = (celsius * 9/5) + 32 //We give the variable "Fahrenheit" a equation, where "Fahrenheit" get a value using the second Celsius value: 102. Now we can't see the value of Fahrenheit because we haven't output the value yet.
console.log("Part 1: "+fahrenheit); //We output the value of Fahrenheit.
console.log("\n"); //New line separate the two parts.
fahrenheit = 77; //We assign another value for Fahrenheit for part 2.
celsius = (fahrenheit - 32) * 5/9; //We assign an equation to Celsius, where we get the value of Celsius. (We haven't output it yet, so we can't see that value)
console.log("Part 2: "+celsius); //We output the value of Celsius.
console.log("\n"); //New line separate the two parts.
console.log("Part 3: "+fahrenheit+" degrees fahrenheit equals to "+celsius+" degrees Celsius"); //Output a sentence including the value of Fahreheit.
console.log("\n"); //new line separate the two parts.
let x1 = -4; //Assign a value for x1.
let y1 = 5; //Assign a value for y1.
let x2 = 6; //Assign a value for x2.
let y2 = 0; //Assign a value for y2.
let m = (y2 - y1)/(x2 - x1); //Assign an equation for m (slope).
console.log("Last Part: the value of m is: "+m); //Output a sentence to show the slope value.
console.log("\n");
console.log("HERE IS MY BONUS TASK!!!")
let num = prompt("Please type a positive integer there!!! Here I can tell you whether it is a prime number or not!!!");
function Prime() {
    for (let i = 2; i <= num; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(Prime(num));
