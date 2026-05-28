const burgerButton = document.querySelector('.burger');
const navigation = document.querySelector('.header__nav');
const filterButtons = document.querySelectorAll('.filter');

if (burgerButton && navigation) {
  burgerButton.addEventListener('click', () => {
    const isOpen = burgerButton.getAttribute('aria-expanded') === 'true';

    burgerButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((currentButton) => {
      currentButton.classList.remove('filter--active');
    });

    button.classList.add('filter--active');
  });
});
