class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` 
      <style>
      footer {
        background-color: #333;
        color: #fff;
        padding: 10px;
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
    }   
    </style>
        <footer>            
        <p>&copy; 2024 Prehistory Website. All rights reserved.</p>         
        </footer>     
      `;
    }
  }
  customElements.define('main-footer', Footer);