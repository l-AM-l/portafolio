/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

// TODO: Adjust this script so it can work with the sieve.html file.


var sieve = function(n) {
    "use strict";
  
    var n = parseInt(document.getElementById("num").value);
    var array = new Array(n).fill(true);
    var primes = [];
  
    for (var i = 2; i < n; i++) {
      if (array[i]) {
        primes.push(i);
  
        for (var j = i * i; j < n; j += i) {
          array[j] = false;
        }
      }
    }
  
    document.getElementById("primes").textContent = primes.join(", ");
  }
  