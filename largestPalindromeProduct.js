/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var value;
  var array = [];
  // do your work here

if(n==2){
  for(var x=10;x<100;x++){
    for(var y = 10;y<100;y++){
      value = x*y;
      if (value == parseInt(reverse_a_number(value),10) ){
        array.push(value);
      }
    }
  }
  factor_0 =array[array.length-1];
}else

if(n==3){
  for(var x=100;x<1000;x++){
    for(var y = 100;y<1000;y++){
      value = x*y;
      if (value == parseInt(reverse_a_number(value),10) ){
        array.push(value);
      }
    }
  }
factor_1 = array[array.length-1];
}else
console.log("error");


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};