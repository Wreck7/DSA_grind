const prompt = require("prompt-sync")();

// every character in a new line!

// let str = prompt('enter a string: ')

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }

// reverse a the string!

// let str = prompt('enter a string:')
// let revStr = ''

// for (let i = str.length-1; i >= 0; i--) {
//     revStr += str[i]
// }

// console.log(revStr)

// palindrome or not!

let str = prompt("enter a string: ");

function revStr(str) {
  return str.split("").reverse().join("");
}

console.log(revStr(str) === str ? "Palindrome" : " not a Palindrome")
