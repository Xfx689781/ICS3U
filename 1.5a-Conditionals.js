const prompt = require('prompt-sync')();
let age = prompt("What is your age?"); //to input the age
age = parseInt(age); //to make the age to an integer
if (age>=50){ //to check whether the age is over 50
    console.log("You qualify for the senior discount! ");
}
if (age<16){ //to check whether the age is less than 16
    console.log("You're not old enough to drive yet.");
}
if(age%2==0){ //to check whether the age is even (%2 means the remain when divide by 2)
    console.log("Your age is an even number");
}
if(age%2==1){ //The same, to check whether the age is odd
    console.log("Your age is an odd number");
}
    let name = prompt("What is your name?"); //to input the last name
if (name.length>7){ //to check whether the name's length is over 7 tokens (if there is a space, it also counts for one token)
    console.log("You have a long name!");//if it is over 7 tokens, we define that the name is long
}
if(name=="Mr.J"){ //to determine whether the name equals to "Mr.J"
    console.log("🐠");
}
let length = prompt("Do you know how long your name is?"); //to ask how long the name is
length = parseInt(length); //to convert string into integer

if(length>name.length){ //if what your input is larger, it outputs "too high"
    console.log("✖️ Too high.");
}

if(length<name.length){ //The same, if your input is smaller, it outputs "too low"
    console.log("✖️ Too low.");
}

if(length==name.length){ //if your input equals to the name length, it outputs "correct"
    console.log("✔️ CORRECT! YOU ARE A GENIUS!");
}
console.log("\nHere comes MY BONUS TASK!!! There, we input the test mark for each of them, and it will tell you the average, the highest and the lowest marks, as well as the percentages!");
    const total = parseInt(prompt("Enter the total number of students: ")); //input the total number of students
    const totalm = parseInt(prompt("Enter the total mark of the test: ")); //input the total mark of the test
    let highest = Number.MIN_VALUE; 
    let lowest = Number.MAX_VALUE;
    let sum = 0;
    let top = [];

    // Input loop to get data for each student
    for (let i = 0; i < total; i++) { //use a for loop to input the marks
        const mark = parseFloat(prompt("Enter student "+(i+1)+" 's mark: ")); //parseFloat: get the float numbers (the marks can be .5 so it should be floats)
        sum += mark; //to add marks to the sum

        // Check for highest and lowest marks
        if (mark > highest) highest = mark;
        if (mark < lowest) lowest = mark;


    }

    const average = sum / total;
    const avpercent = average / totalm * 100;
    // Display results
    console.log("\nHighest Mark:", highest+"/"+totalm);
    console.log("Highest Mark Percentage:", (highest/totalm*100).toFixed(1)+"%"); //toFixed(1) means to keep 1 decimal
    console.log("\nAverage Mark:", average.toFixed(1)+"/"+totalm);
    console.log("Average Mark Percentage:", avpercent.toFixed(1)+"%");
    console.log("\nLowest Mark:", lowest+"/"+totalm);
    console.log("Lowest Mark Percentage:", (lowest/totalm*100).toFixed(1)+"%\n");
  
