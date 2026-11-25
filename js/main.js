import { header, footer } from "./templates/template.js";
import darkModeButton from "./utils/darkMode.js";
import menuHamburguesa from "./utils/menu.js";

const cajaHeader =  document.querySelector("header")
const cajaFooter = document.querySelector("footer")
cajaHeader.innerHTML = header
cajaFooter.innerHTML = footer

darkModeButton()
menuHamburguesa()