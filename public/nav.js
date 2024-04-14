class Nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
        <ul>
         <li class="active">
         <button>Animation</button>
         </li>
         <li>
         <button>Branding</button>
         </li>
         <li>
         <button>Illustration</button>
         </li>
        </ul>
       </nav>
        `;
    }
}

customElements.define('main-nav', Nav);



  