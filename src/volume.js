function convertVolume() {
  const resultText = document.getElementById('vresulttext');
  resultText.innerText = '';
  let unit = document.getElementById('vunit').value;
  let targetUnit = document.getElementById('vtargetunit').value;
  let number = document.getElementById('vnumber');
  let result;
  if (unit !== targetUnit) {
    if (unit === 'cups' && targetUnit === 'ml') {
      result = number.value * 236.558;
      resultText.innerText = ` ${result} ${targetUnit}`
    } else if (unit === 'ml' && targetUnit === 'cups') {
      result = number.value / 236.558;
      resultText.innerText = ` ${result} ${targetUnit}`
    }
  } else {
    resultText.innerText = ` ${number.value} ${targetUnit}`
  }
}

export { convertVolume }
