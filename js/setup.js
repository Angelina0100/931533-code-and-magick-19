'use strict';
var wizards = {
  WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  WIZARD_SECOND_NAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYE_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomElement = function (array) {
  var randomElementIndex = Math.floor(Math.random() * array.length);
  return array[randomElementIndex];
};

var renderWizard = function (firstNAme, secondName, coat, eye) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = getRandomElement(wizards.WIZARD_NAMES) + ' ' + getRandomElement(wizards.WIZARD_SECOND_NAMES);
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomElement(wizards.COAT_COLORS);
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomElement(wizards.COAT_COLORS);
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomElement(wizards.EYE_COLORS);
  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i ++) {
  fragment.appendChild(renderWizard(wizards.WIZARD_NAMES, wizards.WIZARD_SECOND_NAMES, wizards.COAT_COLORS, wizards.EYE_COLORS));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
