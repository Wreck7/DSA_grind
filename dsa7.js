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

// closures understanding!