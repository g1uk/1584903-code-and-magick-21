'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионого`, `Ирвинг`];
const WIZARD_COATS_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

let similarListElement = document.querySelector(`.setup-similar-list`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);
let fragment = document.createDocumentFragment();

let userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

let arrayRandomElement = function (array) {
  let randomElement = Math.floor(Math.random() * array.length);
  return array[randomElement];
};

let wizards = [
  {
    name: arrayRandomElement(WIZARD_NAMES),
    surname: arrayRandomElement(WIZARD_SURNAMES),
    coatColor: arrayRandomElement(WIZARD_COATS_COLOR),
    eyesColor: arrayRandomElement(WIZARD_EYES_COLOR)
  },
  {
    name: arrayRandomElement(WIZARD_NAMES),
    surname: arrayRandomElement(WIZARD_SURNAMES),
    coatColor: arrayRandomElement(WIZARD_COATS_COLOR),
    eyesColor: arrayRandomElement(WIZARD_EYES_COLOR)
  },
  {
    name: arrayRandomElement(WIZARD_NAMES),
    surname: arrayRandomElement(WIZARD_SURNAMES),
    coatColor: arrayRandomElement(WIZARD_COATS_COLOR),
    eyesColor: arrayRandomElement(WIZARD_EYES_COLOR)
  },
  {
    name: arrayRandomElement(WIZARD_NAMES),
    surname: arrayRandomElement(WIZARD_SURNAMES),
    coatColor: arrayRandomElement(WIZARD_COATS_COLOR),
    eyesColor: arrayRandomElement(WIZARD_EYES_COLOR)
  }
];

let renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);
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

let similarUsers = document.querySelector(`.setup-similar`);
similarUsers.classList.remove(`hidden`);
