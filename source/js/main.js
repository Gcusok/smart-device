import {
  iosVhFix
} from './utils/ios-vh-fix';
import {
  initModals
} from './modules/modals/init-modals';
import {
  Form
} from './modules/form-validate/form';

// Переменные модального окна
const body = document.body;
const callbackButton = document.querySelector('[data-button=callback]');
const modal = document.querySelector('[data-modal=feedback]');
const overlayModal = modal.querySelector('[data-close-modal]');
const closeModal = modal.querySelector('[data-close-modal=button]');
const modalInputName = modal.querySelector('[data-input=name]');
// Переменные аккардиона
const accordionButtons = document.querySelectorAll('[data-accordion-button=button]');
const accordions = document.querySelectorAll('[data-sections-list=accordion]');
// Переменные ввода номера телефона
const phoneInputs = document.querySelectorAll('[data-input=phone]');

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });

  // Модальное окно
  callbackButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('is-active');
    body.classList.add('scroll-lock');
    modalInputName.focus();
  });

  overlayModal.onclick = () => {
    modal.classList.remove('is-active');
    body.classList.remove('scroll-lock');
  };

  closeModal.onclick = () => {
    modal.classList.remove('is-active');
    body.classList.remove('scroll-lock');
  };

  // Маска поля телефона

  phoneInputs.forEach((input) => {

    input.addEventListener('focus', () => {
      if (input.value.length === 0) {
        input.value = '+7';
        input.selectionStart = input.value.length;
      }
    });

    input.addEventListener('keypress', (evt) => {
      let currentLength = input.value.length;

      if (currentLength === 2) {
        input.value = input.value + '(';
      }

      if (currentLength === 6) {
        input.value = input.value + ')';
      }

      if (!/\d/.test(evt.key)) {
        evt.preventDefault();
      }
    });

    input.addEventListener('click', (evt) => {
      if (input.selectionStart < 2) {
        input.selectionStart = input.value.length;
      }
      if (evt.key === 'Backspace' && input.value.length <= 2) {
        evt.preventDefault();
      }
    });

    input.addEventListener('blur', () => {
      if (input.value === '+7') {
        input.value = '';
      }
    });

    input.addEventListener('keydown', (evt) => {
      if (evt.key === 'Backspace' && input.value.length <= 2) {
        evt.preventDefault();
      }
    });

  });

  // Аккардион мобильной версии
  accordionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      accordions[index].classList.toggle('is-open');
      button.classList.toggle('is-active');

      let thisAccorion = accordions[index];

      accordions.forEach((accordion, count) => {
        if (accordion !== thisAccorion) {
          accordion.classList.remove('is-open');
          accordionButtons[count].classList.remove('is-active');
        }
      });
    });
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
