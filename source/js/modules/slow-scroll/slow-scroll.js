const scrollButton = document.querySelector('[data-hero-button]');
const feedbackSection = document.querySelector('[data-feedback]');

const initSlowScroll = () => {
  scrollButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    feedbackSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }


  );
};
export {
  initSlowScroll
};
