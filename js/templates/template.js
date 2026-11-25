const header = 
`<nav class="navbar">
  <a href="index.html" class="logo">
    <img
      src="https://res.cloudinary.com/ssamn4fj/image/upload/v1793822477/marta-jover-monograma.svg"
      alt="logo mj"
      class="logo heartbeat"
    />
  </a>
  <ul class="nav-links">
    <li><a href="about.html">About</a></li>
    <li><a href="index.html#skills">Skills</a></li>
    <li><a href="index.html#cheatsheets">Cheatsheets</a></li>
    <li><a href="index.html#recursos">Recursos</a></li>
    <li><a href="contacto.html">Contacto</a></li>
  </ul>
  <button type="button" id="darkMode" aria-label="Dark Mode">
    <span class="lightMode">☀️</span>
    <span class="darkMode">🌙</span>
  </button>
  <button class="hamburger" aria-expanded="false" aria-label="Open Menu">
    <span></span>
    <span></span>
    <span></span>
  </button>

</nav>`

const footer = `
<nav class="footer-nav">
  <a href="https://github.com/MartaJover">GitHub</a>
  <a href="https://www.linkedin.com/in/martajoveramoros/">LinkedIn</a>
</nav>`

export {header, footer}