'use strict';

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter += 1;
    let times = (warningCounter === 1 ? 'time' : 'times');
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${times} today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const accidentWarning = hazardWarningCreator('Crashed Vehicles on the Road');
const weatherWarning = hazardWarningCreator('Dangerous Weather');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');

accidentWarning('Mary St and 3rd Ave');
accidentWarning('Washington Ave');

weatherWarning('Palo Alto');
weatherWarning('San Rafael');

