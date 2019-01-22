/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

function _sumFibs( maxFibValue ) {
  var sum = 0;
  var fib = [1,2];
  var max = maxFibValue;
  var i = 2;
  var loop = true

   while (loop) {
      if (fib[i-1] + fib[i-2] > maxFibValue) {
          loop = false;
          for(var f=0;f<fib.length;f++){
            if(fib[f]%2 == 0){
            sum = sum + fib[f];
            }
          }
       } else {
          fib.push(fib[i-1] + fib[i-2]);
          i++;
      }
   }
  // do your work here
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;
  var fib = [1,2];
  var max = maxFibValue;
  var i = 2;
  var loop = true

   while (loop) {
      if (fib[i-1] + fib[i-2] > maxFibValue) {
          loop = false;
          highest = fib[fib.length-1];
       } else {
          fib.push(fib[i-1] + fib[i-2]);
          i++;
      }
   }
  //define your base case, validate your input


  //do your work here

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};