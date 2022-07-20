function cmToMeters(number, resultText, targetUnit) {
  let result = number.value/100;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

function cmToInches(number, resultText, targetUnit) {
  let result = number.value/0.39370;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

function cmToFeet(number, resultText, targetUnit) {
  let result = number.value*0.032808;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

function cmToYards(number, resultText, targetUnit) {
  let result = number.value*0.010936;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

function cmToKilometers(number, resultText, targetUnit) {
  let result = number.value/100000;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

function cmToMiles(number, resultText, targetUnit) {
  let result = number.value*0.0000062137;
  resultText.innerText = ` ${result} ${targetUnit}`;
  return result
};

export { cmToMeters, cmToInches, cmToFeet, cmToYards, cmToKilometers, cmToMiles }
