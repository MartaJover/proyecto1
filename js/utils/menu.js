const menuHamburguesa = () => {
    const botonHamburguesa = document.querySelector(".hamburger")
    const navHamburguesa = document.querySelector(".nav-links")
    botonHamburguesa.addEventListener("click", (e)=>{
        navHamburguesa.classList.toggle("active")
        botonHamburguesa.classList.toggle("active")
    })
}

export default menuHamburguesa