// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  function sumPrimes(num) {
  // step 1	
  let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
  // step 2
  let onlyPrimes = arr.filter( (n) => { 
    let m = n-1;
    while (m > 1 && m >= Math.sqrt(n)) { 
      if ((n % m) === 0) 
        return false;
        m--;
    }
      return true;
  });
 }
  console.log(sumPrimes(10));
})();

