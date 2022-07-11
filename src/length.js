function convertLength() {
  const resultText = document.getElementById('resulttext');
  resultText.innerText = '';
  let unit = document.getElementById('unit').value;
  let targetUnit = document.getElementById('targetunit').value;
  let number = document.getElementById('number');
  let result;
  if (unit !== targetUnit) {
    if (unit === 'meters' && targetUnit === 'cm') {
      result = number.value * 100;
      resultText.innerText = ` ${result} ${targetUnit}`
    } else if (unit === 'cm' && targetUnit === 'meters') {
      result = number.value / 100;
      resultText.innerText = ` ${result} ${targetUnit}`
    }
  } else {
    resultText.innerText = ` ${number.value} ${targetUnit}`
  }
}

export {convertLength}
