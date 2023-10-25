/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers



var memo = {};

function fibonacci() {
    "use strict";
  var n = document.getElementById("num").value;
  var val = f(n);
  document.getElementById("fibonacciLbl").textContent = "Fibonacci sequence: " + val.join(', ');
}

function f(n) {
  var value;
  // Check if the memory array already contains the requested number
  if (memo.hasOwnProperty(n)) {
    value = memo[n];
  } else {
    if (n <= 0) {
      value = [];
    } else if (n === 1) {
      value = [0];
    } else if (n === 2) {
      value = [0, 1];
    } else {
      var prev = f(n - 1);
      prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
      value = prev;
    }
    memo[n] = value;
  }

  return value;
}
