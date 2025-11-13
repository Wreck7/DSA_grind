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

// let str = prompt("enter a string: ");

// function revStr(str) {
//   return str.split("").reverse().join("");
// }

// console.log(revStr(str) === str ? "Palindrome" : " not a Palindrome")



// toggle case!

// let str = "HeLLo WoRLd";
// let toggled = "";

// for (let i = 0; i < str.length; i++) {
//   let ch = str[i];
  
//   if (ch >= 'a' && ch <= 'z') {
//     toggled += ch.toUpperCase();   // lowercase → uppercase
//   } else if (ch >= 'A' && ch <= 'Z') {
//     toggled += ch.toLowerCase();   // uppercase → lowercase
//   } else {
//     toggled += ch; // keep spaces, numbers, symbols same
//   }
// }

// console.log(toggled);




// count of the each character!


// let str = prompt('enter a string: ')
// // let str = 'vishwa cheeze'
// let freq = {};

// for (let char of str) {
//   if (char !== " ") { // optional: ignore spaces
//     freq[char] = (freq[char] || 0) + 1;
//   }
// }

// console.log(freq);


// stringss completed!


function createCounter() {
  let count = 0; // 'count' is a variable in the outer scope

  return function() { // This is the inner function, forming a closure
    count++;
    console.log(count);
  };
}

const counter1 = createCounter(); // 'counter1' now holds the inner function
counter1(); // Output: 1
counter1(); // Output: 2

const counter2 = createCounter(); // 'counter2' holds a *new* inner function with its own 'count'
counter2(); // Output: 1
counter1(); // Output: 3 (counter1's 'count' is independent)