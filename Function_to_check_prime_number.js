function isPrime(number) {
    if (number === 1) {
        return false;
    } else if (number > 1) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

const num1 = 17;
const num2 = 24;

console.log(`${num1} is ${isPrime(num1) ? 'a Prime' : 'not a Prime'} number`);
console.log(`${num2} is ${isPrime(num2) ? 'a Prime' : 'not a Prime'} number`);
