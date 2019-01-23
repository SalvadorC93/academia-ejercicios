exports.largestPrimeFactor = function(n){
var integer = 600851475143;
var primeArray = [];
var isPrime;
var highest;
var h;

//find divisors starting with 2

for (var i = 2; i <= integer; i++) {
  if (integer % i === 0) {

    //check if divisor is prime
    for (var j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        isPrime = false;
      } else {
        isPrime = true;
      }
    }

    //if the divisor is prime

    if (isPrime === true) {
      //divide integer by prime factor & factor store in array primeArray
      integer /= i
      primeArray.push(i);
    }
  }
}
h = primeArray.length;
highest = primeArray[h - 1];

console.log(highest);

return highest;
};