#!/usr/bin/node

const countPrimeNumbers = () => {
    let counter = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            counter++;
        }
    }
    return counter;
}

const isPrime = number => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }

    return true;
}

const t0 = performance.now();
const primes = countPrimeNumbers();
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
