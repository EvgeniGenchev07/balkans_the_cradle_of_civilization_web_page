class Nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        `;
        
        const openNav = () => {
            const sidebar = this.querySelector('.sidebar');
            const main = this.querySelector('#main');
            sidebar.style.width = "250px";
            main.style.marginLeft = "250px";
        };
        
        const closeNav = () => {
            const sidebar = this.querySelector('.sidebar');
            const main = this.querySelector('#main');
            sidebar.style.width = "0";
            main.style.marginLeft = "0";
        };

        this.querySelector('.openbtn').addEventListener('click', openNav);
        this.querySelector('.closebtn').addEventListener('click', closeNav);
    }
}

customElements.define('menu-nav', Nav);


  