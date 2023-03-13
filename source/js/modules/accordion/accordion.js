const accordionButtons = document.querySelectorAll('[data-accordion-button=button]');
const accordions = document.querySelectorAll('[data-sections-list=accordion]');

const initAccardion = () => {
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
    }

    );
  }

  );
};

export {
  initAccardion
};
