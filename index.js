const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    });
    tabs.forEach(tab => {
      tab.classList.remove('active')
    });
    tab.classList.add('active');
    target.classList.add('active');
  })
});

const button = document.getElementById('button');

button.addEventListener('click', convert);

function convert(event) {
  const resultText = document.getElementById('resulttext')
  resultText.innerText = ''
  let unit = document.getElementById('unit').value;
  let targetUnit = document.getElementById('targetunit').value;
  let number = document.getElementById('number');
  let result
  if (unit !== targetUnit) {
    if (unit === 'meters' && targetUnit === 'cm') {
      result = number.value * 100
      resultText.innerText = ` ${result} ${targetUnit}`
    } else if (unit === 'cm' && targetUnit === 'meters') {
      result = number.value / 100
      resultText.innerText = ` ${result} ${targetUnit}`
    }
  } else {
    resultText.innerText = ` ${number.value} ${targetUnit}`
  };
}
