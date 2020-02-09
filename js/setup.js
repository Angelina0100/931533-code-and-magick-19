'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var QUANTITY = 4;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

//Открытие/закрытие окна настройки персонажа
var popup = document.querySelector('.setup');
var open = document.querySelector('.setup-open');
var close = popup.querySelector('.setup-close');

var popupEscPressHandler = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  popup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
};

var closePopup = function () {
  popup.classList.add('hidden');
};

open.addEventListener('click', function () {
  openPopup();
});

close.addEventListener('click', function () {
  closePopup();
});

open.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
 });

close.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

//Валидация ввода имени персонажа.

var userNameInput = popup.querySelector('.setup-user-name');
userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Поле обязательно для заполнения')
  } else {
    userNameInput.setCustomValidity('');
  }
});

//Изменение цвета мантии персонажа по нажатию.
//Изменение цвета глаз персонажа по нажатию.
// Изменение цвета фаерболов по нажатию

var wizardSetup = document.querySelector('.setup-wizard');
var wizardCoatColor = wizardSetup.querySelector('.wizard-coat');
var wizardEyesColor = wizardSetup.querySelector('.wizard-eyes');
var wizardFireballColor = document.querySelector('.setup-fireball-wrap');

var chooseColor = function (element, array) {
  element.style.fill = getRandomElement(array);
}

wizardCoatColor.addEventListener('click', function () {
  chooseColor(wizardCoatColor, COAT_COLORS);
});

wizardEyesColor.addEventListener('click', function () {
  chooseColor(wizardEyesColor, EYE_COLORS);
});

wizardFireballColor.addEventListener('click', function () {
  wizardFireballColor.style.backgroundColor = getRandomElement(FIREBALL_COLOR);
});

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

var createPlayers = function () {
  var players = [];
  for (var j = 0; j < QUANTITY; j++) {
    var player = {
      name: getWizardName(WIZARD_NAMES, WIZARD_SECOND_NAMES),
      coat: getRandomElement(COAT_COLORS),
      eye: getRandomElement(EYE_COLORS)
    }
    players.push(player);
  }
  return players;
}
createPlayers();


var renderWizard = function () {
  var fragment = document.createDocumentFragment();
  var players = createPlayers();
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
