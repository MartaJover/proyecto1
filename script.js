const menuButton = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')

menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
});