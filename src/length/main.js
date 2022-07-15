import { metersToCm, metersToFeet, metersToInches, metersToYards, metersToKilometers, metersToMiles } from "./fromMeters.js";
import { feetToMeters, feetToInches, feetToCm, feetToYards, feetToKilometers, feetToMiles } from "./fromFeet.js";

function convertLength() {
  const resultText = document.getElementById('resulttext');
  resultText.innerText = '';
  let unit = document.getElementById('unit').value;
  let targetUnit = document.getElementById('targetunit').value;
  let number = document.getElementById('number');
  let result;
  if (unit !== targetUnit) {
    if (unit === 'meters') {
      if (targetUnit === 'cm') {
        metersToCm(number, resultText, targetUnit)
      } else if (targetUnit === 'feet') {
        metersToFeet(number, resultText, targetUnit)
      } else if (targetUnit === 'inches') {
        metersToInches(number, resultText, targetUnit)
      } else if (targetUnit === 'yards') {
        metersToYards(number, resultText, targetUnit)
      } else if (targetUnit === 'kilometers') {
        metersToKilometers(number, resultText, targetUnit)
      } else if (targetUnit === 'miles') {
        metersToMiles(number, resultText, targetUnit)
      }
    } else if (unit === 'feet') {
      if (targetUnit === 'meters') {
        feetToMeters(number, resultText, targetUnit)
      } else if (targetUnit === 'inches') {
        feetToInches(number, resultText, targetUnit)
      } else if (targetUnit === 'cm') {
        feetToCm(number, resultText, targetUnit)
      } else if (targetUnit === 'yards') {
        feetToYards(number, resultText, targetUnit)
      } else if (targetUnit === 'kilometers') {
        feetToKilometers(number, resultText, targetUnit)
      } else if (targetUnit === 'miles') {
        feetToMiles(number, resultText, targetUnit)
      }
    }
  } else {
    resultText.innerText = ` ${number.value} ${targetUnit}`
  }
}

export {convertLength}
