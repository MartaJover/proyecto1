const menuButton = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('abierto');
});

navLinks.forEach((link)=>{
    link.addEventListener('click', () => {
        navLinks.classList.remove('abierto');
    })
})