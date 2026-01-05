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

// const arr = [1,2,3,4,5,6,7]
// const reverseArr = (arr) =>{
//     let newArr = []
//     for(let i = arr.length -1; i>=0; i--){
//         newArr.push(arr[i])
//     }
//     return newArr
// }

// console.log(reverseArr(arr))

// palindrome string

// const isPalindrome = (str) => {
//     const reverseStr = str.split('').reverse().join("")
//     return str === reverseStr
// }

// console.log(isPalindrome('racecar'))

// find the largest element in array

// const arr = [1,2,35,4,32,99,5]

// const findLargest = (arr) =>{
//     let largest = arr[0]
//     for(let i = 1; i<=arr.length - 1;i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
//     }
//     return largest
// }

// console.log(`the largest number in the array is ${findLargest(arr)}`)

// Count frequency of characters in string

// const str = 'vishwaGovula'

// const charFrequency = (str) =>{
//     const frequency = {}
//     for(let char of str.toLowerCase()){
//         frequency[char] = (frequency[char] || 0) + 1
//     }
//     return frequency
// }

// console.log(charFrequency(str))

// Count frequency of elements in array

// const arr = [1,2,33,1,2,346,6,21,1,2,2,3]

// const elementFrequency = (arr) =>{
//     const frequency = {}
//     for(let ele of arr){
//         frequency[ele] = (frequency[ele] || 0) + 1
//     }
//     return frequency
// }

// console.log(elementFrequency(arr))

// find duplicates in a array!

// const arr = [1,2,33,1,2,346,6,21,1,2,2,3]

// function fetchingDuplicates(arr) {
//     const seen = new Set();
//     const duplicates = new Set();

//     for (const ele of arr) {
//         if (seen.has(ele)) {
//             duplicates.add(ele)
//         } else {
//             seen.add(ele)
//         }
//     }
//     return Array.from(duplicates)
// }

// console.log(fetchingDuplicates(arr))

// anagram

// let str1 = "listen"
// let str2 = "silent"

// function checkAnagram(str1, str2) {
//     let sortedStr1 = [...str1].sort()
//     let sortedStr2 = [...str2].sort()
//     return sortedStr1.join('') === sortedStr2.join('')
// }

// console.log(checkAnagram(str1, str2))

// function fibonacciSeries(n) {
//   if (n <= 0) return [];
//   if (n === 1) return [0];

//   const fib = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fib.push(fib[i - 1] + fib[i - 2]);
//   }

//   return fib;
// }
// console.log(fibonacciSeries(10));

// const numbersWithDuplicates = [5, 2, 8, 8, 1, 9, 9];

// function findSecondLargestConcise(arr) {
//   const uniqueNumbers = [...new Set(arr)];
//   uniqueNumbers.sort((a, b) => b - a);
//   return uniqueNumbers.length >= 2 ? uniqueNumbers[1] : "No second largest element";
// }

// console.log(findSecondLargestConcise(numbersWithDuplicates));

// function moveZeros(arr) {
//   let index = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[index] = arr[i];
//       index++;
//     }
//   }

//   while (index < arr.length) {
//     arr[index] = 0;
//     index++;
//   }

//   return arr;
// }

// console.log(moveZeros([0, 1, 0, 3, 12]));

// function intersection(arr1, arr2) {
//   const set2 = new Set(arr2);
//   return arr1.filter(item => set2.has(item));
// }

// console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));

// find first repeating element in an array

// const arr = [1,2,3,4,54,11,3,4,2,1]

// function findFirstRepeatingElement(arr) {
//     let seen = new Set()

//     for (let i = 0; i < arr.length; i++) {
//         if(seen.has(arr[i])){
//             return arr[i]
//         }else{
//             seen.add(arr[i])
//         }
//     }
//     return null
// }

// console.log(findFirstRepeatingElement(arr))

// find first non-repeating element in an array

// function firstNonRepeating(arr) {
//   const freq = {};

//   for (let num of arr) {
//     freq[num] = (freq[num] || 0) + 1;
//   }

//   for (let num of arr) {
//     if (freq[num] === 1) {
//       return num;
//     }
//   }

//   return null;
// }

// const arr = [1, 2, 3, 4, 2, 1, 3];
// console.log(firstNonRepeating(arr));

// Check if array is sorted

// function isSorted(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isSorted([1, 2, 3, 4]));
