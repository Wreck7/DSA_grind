const prompt = require("prompt-sync")();

// print n hellos

// function printHellos(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('hello!')
//     }
// }

// let n = Number(prompt('enter a number: '))
// printHellos(n)

// one to n and vice versa

// function oneToNAndBack(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
//   for (let i = n-1; i >= 1; i--) {
//     console.log(i);
//   }
// }

// let n = Number(prompt("enter a number: "));
// oneToNAndBack(n);


// sum of natural numbers

// function sumOfNaturalNums(n){
//     let sum = 0;
//     for(let i = 1; i <=n; i++){
//         sum += i
//     }
//     return sum
// }

// let n = Number(prompt("enter a number: "));
// console.log(sumOfNaturalNums(n))

// factorial of a n numbers

// function factorial(n){
//     let ans = 1
//     for (let i = 1; i <= n; i++) {
//         ans *= i
//     }
//     return ans
// }

// let n = Number(prompt("enter a number: "));
// console.log(factorial(n))


// factors of a number n

// function getFactors(n) {
//     let factors = []
//     for(let i = 1; i <= n; i++){
//         if(n%i == 0){
//             factors.push(i)
//         }
//     }
//     return factors
// }

// const n = Number(prompt("enter a number to get their factors: "))
// console.log(getFactors(n))


// prime numbers 


function getFactors(n) {
    let factors = []
    for(let i = 2; i < n; i++){
        if(n%i == 0){
            factors.push(i)
        }
    }
    return factors
}

const n = Number(prompt("enter a number to get their factors: "))
let factors = getFactors(n)

if(factors.length == 0){
    console.log(`${n} is a prime number`)
}else{
    console.log(`${n} is not a prime number`)
}