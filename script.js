const root = document.querySelector(':root');
const lightColorPicker = document.getElementById('lightColorPicker');
const lightColorButton = document.getElementById('lightColorButton');
const openColorPicker = () =>  lightColorPicker.click();
const updateLightColor = () =>  root.style.setProperty('--light-color', lightColorPicker.value);
