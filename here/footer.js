class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <footer>            
        <p>&copy; 2024 Prehistory Website. All rights reserved.</p>         
        </footer>     
      `;
    }
  }
  customElements.define('main-footer', Footer);