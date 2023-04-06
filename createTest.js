/*
This function calculates the total price based on the given price and quantity of an item. 
However, if either the price or quantity is not a number, the function returns an error message.

To test this function, you have to create a test case with different inputs such as valid numbers, 
non-numbers, or negative numbers, and verify that the function returns the expected output. 
Additionally, you should also test for edge cases such as the smallest and largest possible 
numbers, and see how the function handles them.

While any form of testing library is allowed, jest is recommended.

Write the test in the file "createTest.test.js".

In order to run the test, first make sure jest is installed by running "npm install" in the terminal.

After installing jest, run the command "npm test createTestTask" in the terminal to run the test.
*/

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value) && value !== null;
}

function calculateTotalPrice(price, quantity) {
  if (!isNumber(price) || !isNumber(quantity)) {
    return "Invalid input";
  }
  const totalPrice = price * quantity;
  return totalPrice;
}

module.exports = { calculateTotalPrice };
