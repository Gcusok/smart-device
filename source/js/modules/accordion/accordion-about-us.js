const content = document.querySelector('[data-about-us-accordion="content"]');
const button = document.querySelector('[data-about-us-accordion="button"]');

const initAccardionAboutUs = () => {
  if (button === null) {
    return;
  }
  button.addEventListener('click', () => {
    content.classList.toggle('is-open');
    if (content.classList.contains('is-open')) {
      button.textContent = 'Свернуть';
    } else {
      button.textContent = 'Подробнее';
    }
  });
};

export {
  initAccardionAboutUs
};
