'use strict';

(function () {
  var FIREBALL_WRAP = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupUserName = document.querySelector('.setup-user-name');
  var setupClose = setup.querySelector('.setup-close');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
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
  setupFireballWrap.addEventListener('click', function () {
    setupFireballWrap.style.backgroundColor = FIREBALL_WRAP[Math.round(Math.random() * FIREBALL_WRAP.length - 1)];
  });
  var similarDialog = document.querySelector('.setup-similar');
  similarDialog.classList.remove('hidden');
})();
