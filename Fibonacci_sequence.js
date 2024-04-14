const Terms = prompt("Enter the number of Fibonacci terms:");

// Initialize variables
let firstTerm = 0, secondTerm = 1, nextTerm, i = 1;

console.log(firstTerm); 
console.log(secondTerm); 

// Generating Fibonacci sequence using while loop
while (i <= Terms - 2) {
    nextTerm = firstTerm + secondTerm;
    console.log(nextTerm);
    firstTerm = secondTerm;
    secondTerm = nextTerm;
    i++;
}
