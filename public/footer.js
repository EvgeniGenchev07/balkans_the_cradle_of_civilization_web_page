class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer>            
        <p>&copy; 2024 Prehistory Website All rights reserved.</p>         
        </footer>     
      `;
    }
  }
  customElements.define('main-footer', Footer);
  document.getElementById("nav-toggle").addEventListener('click', ()=>{
    document.getElementById("nav_background").classList.toggle("show");
    document.getElementById("index_navigation").classList.toggle("hide");
  });