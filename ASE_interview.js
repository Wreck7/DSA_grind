// prime number n

// function isPrime(n) {
//     if (n <= 1) return false;  // 1 and below are not prime
//     if (n <= 3) return true;   // 2 and 3 are prime
//     if (n % 2 === 0 || n % 3 === 0) return false;  // Exclude multiples of 2 and 3
//     // Check divisors from 5 up to sqrt(n), skipping even numbers
//     for (let i = 5; i * i <= n; i += 6) {
//         if (n % i === 0 || n % (i + 2) === 0) return false;
//     }
//     return true;
// }

// console.log(isPrime(31))


// method2

// function isPrime(n) {
//     // Step 1: Numbers less than or equal to 1 are NOT prime
//     if (n <= 1) {
//         return false;
//     }

//     // Step 2: 2 and 3 are prime numbers
//     if (n === 2 || n === 3) {
//         return true;
//     }
    
//     // Step 3: If number is divisible by 2 or 3, it's NOT prime
//     if (n % 2 === 0 || n % 3 === 0) {
//         return false;
//     }

//     // Step 4: Check divisibility from 5 onwards
//     // We only check till square root of n
//     for (let i = 5; i * i <= n; i++) {
//         // If n is divisible by i, it's NOT prime
//         if (n % i === 0) {
//             return false;
//         }
//     }

//     // Step 5: If no divisor found, number is prime
//     return true;
// }
// console.log(isPrime(31))


// reversing a string

// function reverseStr(word) {
//     return word.split('').reverse().join('')
// }

// console.log(reverseStr('hello'))


// reversing a array

// const arr = [1,2,3,4,5,6,7]
// const reverseArr = (arr) => {
//     return arr.reverse()
// }

// console.log(reverseArr(arr))




// reversing a string with loops

// const reverseStr = (str) =>{
//     newStr = ''
//     for(let i = str.length - 1; i>=0; i--){
//         newStr += str[i]
//     }
//     return newStr
// }

// console.log(reverseStr('vishwa'))


// reversing a array with loops

const arr = [1,2,3,4,5,6,7]
const reverseArr = (arr) =>{
    let newArr = []
    for(let i = arr.length -1; i>=0; i--){
        newArr.push(arr[i])
    }
    return newArr
}

console.log(reverseArr(arr))