import {  convertLength } from './src/length.js';
import {  convertVolume } from './src/volume.js';

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

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
})

const lengthButton = document.getElementById('lbutton');
const volumeButton = document.getElementById('vbutton');


lengthButton.addEventListener('click', convertLength);
volumeButton.addEventListener('click', convertVolume);
