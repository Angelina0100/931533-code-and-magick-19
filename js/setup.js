'use strict';
//сделать отдельными массивами
var Wizards = {
  WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  WIZARD_SECOND_NAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYE_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
};
var QUANTITY = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomElement = function (array) {
  var randomElementIndex = Math.floor(Math.random() * array.length);
  return array[randomElementIndex];
};

var getWizardName = function(firstName, secondName) {
  var wizardName = getRandomElement(firstName) + ' ' + getRandomElement(secondName);
  return wizardName;
}

var createPlayer = function () {
  var players = [];
  for (var j = 0; j < QUANTITY; j++) {
    var player = {
      name: getWizardName(Wizards.WIZARD_NAMES, Wizards.WIZARD_SECOND_NAMES),
      coat: getRandomElement(Wizards.COAT_COLORS),
      eye: getRandomElement(Wizards.EYE_COLORS)
    }
    players.push(player);
  }
  return players;
}
createPlayer();


var renderWizard = function () {
  var fragment = document.createDocumentFragment();
  var players = createPlayer();
  for (var i = 0; i < players.length; i ++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = players[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = players[i].coat;
    wizardElement.querySelector('.wizard-eyes').style.fill = players[i].eye;
    fragment.appendChild(wizardElement);
  }
  similarListElement.appendChild(fragment);
}
renderWizard();
userDialog.querySelector('.setup-similar').classList.remove('hidden');
