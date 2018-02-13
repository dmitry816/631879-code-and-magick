'use strict';

var WIZARDS_NUMBER = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_WRAP = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupUserName = document.querySelector('.setup-user-name');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

// event listeners
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
  if (evt.keyCode === ESC_KEYCODE) {
    setup.classList.add('hidden');
  }
});

setupUserName.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});


wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLOR[generateRandomElement(COAT_COLOR)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = EYES_COLOR[generateRandomElement(EYES_COLOR)];
});

setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.style.backgroundColor = FIREBALL_WRAP[Math.round(Math.random() * FIREBALL_WRAP.length - 1)];
});

// create wizards
var generateRandomElement = function (array) {
  return Math.round(Math.random() * (array.length - 1));
};

var createRandomWizardObjects = function (wizardsNumber) {
  var wizards = [];

  for (var i = 0; i < wizardsNumber; i++) {
    wizards[i] = {
      name: WIZARD_NAMES[generateRandomElement(WIZARD_NAMES)] + ' ' + WIZARD_SECOND_NAMES[generateRandomElement(WIZARD_SECOND_NAMES)],
      coatColor: COAT_COLOR[generateRandomElement(COAT_COLOR)],
      eyesColor: EYES_COLOR[generateRandomElement(EYES_COLOR)]
    };
  }
  return wizards;
};

var wizards = createRandomWizardObjects(WIZARDS_NUMBER);

// get variables for frame with similar persons
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var generateRandomWizards = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};


var renderWizards = function (wizardsNumber) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsNumber; i++) {
    fragment.appendChild(generateRandomWizards(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

renderWizards(WIZARDS_NUMBER);

// show frame with persons
var similarDialog = document.querySelector('.setup-similar');
similarDialog.classList.remove('hidden');

