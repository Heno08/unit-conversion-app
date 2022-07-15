function metersToFeet(number, resultText, targetUnit) {
  let result = number.value/3.2808;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

function metersToCm(number, resultText, targetUnit) {
  let result = number.value/0.01;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

function metersToInches(number, resultText, targetUnit) {
  let result = number.value*39.370;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

function metersToYards(number, resultText, targetUnit) {
  let result = number.value*1.0936;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

function metersToKilometers(number, resultText, targetUnit) {
  let result = number.value/1000;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

function metersToMiles(number, resultText, targetUnit) {
  let result = number.value*0.00062137;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

export { metersToCm, metersToFeet, metersToInches, metersToYards, metersToKilometers, metersToMiles }
