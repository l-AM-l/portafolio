/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/



var getPrimeFactors = function (n) {
  "use strict";

  function isPrime(n) {
   var i;

    for (i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  var number = parseInt(document.getElementById("num").value);
  var sequence = [];
   //TODO: Check which numbers are factors of n and also check if
    // that number also happens to be a prime
  

  for (var i = 2; i <= number; i++) {
    if (number % i === 0 && isPrime(i)) {
      sequence.push(i);
    }
  }

  document.getElementById("pf").textContent = "Prime factors: " + sequence.join(", ");
}
