const prompt = require('prompt-sync')();
let age = prompt("What is your age?");
age = parseInt(age);
if (age>=50){
    console.log("You qualify for the senior discount! ");
}
if (age<16){
    console.log("You're not old enough to drive yet.");
}
if(age%2==0){
    console.log("Your age is an even number");
}
if(age%2==1){
    console.log("Your age is an odd number");
}
    let name = prompt("What is your name?");
if (name.length>7){
    console.log("You have a long name!");
}
if(name=="Mr.J"){
    console.log("🐠");
}
let length = prompt("Do you know how long your name is?");
length = parseInt(length);

if(length>name.length){
    console.log("✖️ Too high.");
}

if(length<name.length){
    console.log("✖️ Too low.");
}

if(length==name.length){
    console.log("✔️ CORRECT! YOU ARE A GENIUS!");
}
console.log("\nHere comes MY BONUS TASK!!! There, we input the test mark for each of them, and it will tell you the average, the highest and the lowest marks, as well as the percentages!");
    const total = parseInt(prompt("Enter the total number of students: "));
    const totalm = parseInt(prompt("Enter the total mark of the test: "));
    let highest = Number.MIN_VALUE;
    let lowest = Number.MAX_VALUE;
    let sum = 0;
    let top = [];

    // Input loop to get data for each student
    for (let i = 0; i < total; i++) {
        const mark = parseFloat(prompt("Enter student "+(i+1)+" 's mark: "));
        sum += mark;

        // Check for highest and lowest marks
        if (mark > highest) highest = mark;
        if (mark < lowest) lowest = mark;


    }

    const average = sum / total;
    const avpercent = average / totalm * 100;
    // Display results
    console.log("\nHighest Mark:", highest+"/"+totalm);
    console.log("Highest Mark Percentage:", (highest/totalm*100).toFixed(1)+"%");
    console.log("\nAverage Mark:", average.toFixed(1)+"/"+totalm);
    console.log("Average Mark Percentage:", avpercent.toFixed(1)+"%");
    console.log("\nLowest Mark:", lowest+"/"+totalm);
    console.log("Lowest Mark Percentage:", (lowest/totalm*100).toFixed(1)+"%\n");
  
