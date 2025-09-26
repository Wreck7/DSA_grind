const prompt = require("prompt-sync")();

// valid user assignment

// let user = prompt("enter the username: ");

// if (user === "vishwa") {
//   console.log("valid user!");
// } else {
//   console.log("invalid user!");
// }


// bill discount

// let bill_amt = Number(prompt("enter the bill amount: "));
// let final_amt;

// if (bill_amt >= 5000) {
//   let discount = bill_amt * 0.10;
//   final_amt = bill_amt - discount;
// } else if (bill_amt >= 3000) {
//   let discount = bill_amt * 0.06;
//   final_amt = bill_amt - discount;
// } else if (bill_amt >= 1000) {
//   let discount = bill_amt * 0.01;
//   final_amt = bill_amt - discount;
// } else {
//   final_amt = bill_amt;
// }
// console.log(final_amt);



// bijli bill

// let units = parseInt(prompt("Enter the number of electricity units consumed:"));
// let bill = 0;

// // Calculate charges based on unit slabs
// if (units <= 100) {
//     bill = units * 5;
// } else if (units <= 200) {
//     bill = (100 * 5) + ((units - 100) * 7);
// } else {
//     bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
// }

// console.log("Total Units Consumed: " + units);
// console.log("Total Bill Amount: ₹" + bill);