function feetToMeters(number, resultText, targetUnit) {
  let result = number.value/3.2808;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

function feetToInches(number, resultText, targetUnit) {
  let result = number.value*12;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

function feetToCm(number, resultText, targetUnit) {
  let result = number.value/0.032808;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

function feetToYards(number, resultText, targetUnit) {
  let result = number.value*0.33333;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

function feetToKilometers(number, resultText, targetUnit) {
  let result = number.value/3280.8;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

function feetToMiles(number, resultText, targetUnit) {
  let result = number.value*0.00018939;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

export { feetToMeters, feetToInches, feetToCm, feetToYards, feetToKilometers, feetToMiles }
