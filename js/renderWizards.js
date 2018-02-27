'use strict';

(function () {
  var WIZARDS_NUMBER = 4;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = COAT_COLOR[generateRandomElement(COAT_COLOR)];
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = EYES_COLOR[generateRandomElement(EYES_COLOR)];
  });
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
  var similarListElement = document.querySelector('.setup-similar-list');
  var renderWizards = function (wizardsNumber) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizardsNumber; i++) {
      fragment.appendChild(window.generateRandomWizards(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  renderWizards(WIZARDS_NUMBER);
})();
