'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионого`, `Ирвинг`];
const WIZARD_COATS_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);
const setupOpen = document.querySelector(`.setup-open`);
const setup = document.querySelector(`.setup`);
const setupClose = document.querySelector(`.setup-close`);
const userNameInput = document.querySelector(`.setup-user-name`);
const wizardSetup = setup.querySelector(`.wizard`);
const wizardCoat = wizardSetup.querySelector(`.wizard-coat`);
const wizardEyes = wizardSetup.querySelector(`.wizard-eyes`);
const fireball = setup.querySelector(`.setup-fireball-wrap`);


const fragment = document.createDocumentFragment();

const arrayRandomElement = function (array) {
  const randomElement = Math.floor(Math.random() * array.length);
  return array[randomElement];
};

const wizards = [
  {
    name: arrayRandomElement(WIZARD_NAMES),
    surname: arrayRandomElement(WIZARD_SURNAMES),
    coatColor: arrayRandomElement(WIZARD_COATS_COLOR),
    eyesColor: arrayRandomElement(WIZARD_EYES_COLOR),
    fireballColor: arrayRandomElement(WIZARD_FIREBALL_COLOR)
  },
  {
    name: arrayRandomElement(WIZARD_NAMES),
    surname: arrayRandomElement(WIZARD_SURNAMES),
    coatColor: arrayRandomElement(WIZARD_COATS_COLOR),
    eyesColor: arrayRandomElement(WIZARD_EYES_COLOR),
    fireballColor: arrayRandomElement(WIZARD_FIREBALL_COLOR)
  },
  {
    name: arrayRandomElement(WIZARD_NAMES),
    surname: arrayRandomElement(WIZARD_SURNAMES),
    coatColor: arrayRandomElement(WIZARD_COATS_COLOR),
    eyesColor: arrayRandomElement(WIZARD_EYES_COLOR),
    fireballColor: arrayRandomElement(WIZARD_FIREBALL_COLOR)
  },
  {
    name: arrayRandomElement(WIZARD_NAMES),
    surname: arrayRandomElement(WIZARD_SURNAMES),
    coatColor: arrayRandomElement(WIZARD_COATS_COLOR),
    eyesColor: arrayRandomElement(WIZARD_EYES_COLOR),
    fireballColor: arrayRandomElement(WIZARD_FIREBALL_COLOR)
  }
];

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});


userNameInput.addEventListener(`input`, function () {
  let valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Ещё ` + (MIN_NAME_LENGTH - valueLength) + ` симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` симв.`);
  } else {
    userNameInput.setCustomValidity(``);
  }

  userNameInput.reportValidity();
});

wizardCoat.addEventListener(`click`, function () {
  wizardCoat.style.fill = arrayRandomElement(WIZARD_COATS_COLOR);
});
wizardEyes.addEventListener(`click`, function () {
  wizardEyes.style.fill = arrayRandomElement(WIZARD_EYES_COLOR);
});
fireball.addEventListener(`click`, function () {
  fireball.style.backgroundColor = arrayRandomElement(WIZARD_FIREBALL_COLOR);
});

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`)
    .textContent = wizard.name + ` ` + wizard.surname;
  wizardElement.querySelector(`.wizard-coat`)
    .style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`)
    .style.fill = wizard.eyesColor;
  return wizardElement;
};

for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

const similarUsers = document.querySelector(`.setup-similar`);
similarUsers.classList.remove(`hidden`);
