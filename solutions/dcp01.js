// Date: 05/01/2019
// Start: 14:40. End: 15:23. Note: Added tests thereafter. Total was +- 1 hour.
// Problem: Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// ETA: 60 mins.
// Example: Given [10, 15, , 3, 7] and k of 17, return true, since 10 + 7 = 17.

function twoAddUp(numbers, k) {
  for (let i = 0; i < numbers.length; i++) {
    let base = numbers[i];
    // for each number, add it to the next to see if it matches k. If not, move
    for (var j = 0; j < numbers.length; j++) {
      if (base !== numbers[j]) {
        const sum = base + numbers[j];
        if (sum === k) {
          console.log("Match! ", base, " + ", numbers[j], " = ", sum);
          return true;
        }
      }
    }
  }
  return false;
}

module.exports = twoAddUp;
