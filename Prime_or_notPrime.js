const num = prompt("Enter a number to check if it's prime: ");

let isPrime = true;

if (num === 1) {
    isPrime = false;
} else if (num > 1) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
} else {
    isPrime = false;
}

if (isPrime) {
    console.log(`${num} is a Prime number`);
} else {
    console.log(`${num} is not a Prime number`);
}
