const darkModeButton = () => {
    const boton = document.querySelector("#darkMode")

    boton.addEventListener("click", (e) =>{
        document.body.classList.add("dark-mode")
    })
}

export default darkModeButton