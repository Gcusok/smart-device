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
const callbackButton = document.querySelector('[data-button=callback]');
const modal = document.querySelector('[data-modal=feedback]');
const overlayModal = document.querySelector('[data-close-modal]');
const closeModal = document.querySelector('[data-close-modal=button]');

const accordionButtons = document.querySelectorAll('[data-accordion-button=button]');
const accordions = document.querySelectorAll('[data-sections-list=accordion]');
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
  });

  overlayModal.onclick = () => {
    modal.classList.remove('is-active');
  };

  closeModal.onclick = () => {
    modal.classList.remove('is-active');
  };

  // Аккардион мобильной версии
  accordionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      accordions[index].classList.toggle('is-open');
      button.classList.add('is-active');
      let thisAccorion = accordions[index];

      accordions.forEach((accordion) => {
        if (accordion !== thisAccorion) {
          accordion.classList.remove('is-open');
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
