'use strict';

function average(numbers) {
  let total = 0;
  numbers.forEach(function(number){
    total += number;
  });

  return total/numbers.length;
}

