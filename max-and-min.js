'use strict';
function max(numbers) {
  let i = 0;
  let currentMax = null;
  while (i < numbers.length) {
    if (currentMax === null || currentMax < numbers[i]) {
      currentMax = numbers[i];
    }
    i++;
  }
  return currentMax;
}

function min(numbers) {
  let i = 0;
  let currentMin = null;
  while (i < numbers.length) {
    if (currentMin === null || currentMin > numbers[i]) {
      currentMin = numbers[i];
    }
    i++;
  }
  return currentMin;
}

