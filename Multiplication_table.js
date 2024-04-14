// Given number for multiplication table
const baseNumber = prompt("enter a number : ");

// Print table headers
console.log(`Multiplication table for ${baseNumber}`);

// Loop to generate multiplication table
for (let i = 1; i <= 10; i++) {
    const result = baseNumber * i;

    // Print multiplication table row
    console.log(`${baseNumber} x ${i} = ${result}`);
}
