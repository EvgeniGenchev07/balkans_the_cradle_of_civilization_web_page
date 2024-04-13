class Nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="myNav" class="overlay">
                <a href="javascript:void(0)" class="closebtn" id="closeBtn">&times;</a>
                <div class="overlay-content">
                <a href="index.html">Начална страница</a>
                <a href="timeline.html">Линия на времето</a>
                <a href="artifacts.html">Артефакти</a>
                <a href="aboutus.html">За нас</a>
                <a href="contact.html">Контакти</a>
            </div>
        </div>
        <span class="opnbtn" id="openBtn">&#9776;</span>
        `;

        // Add event listeners
        this.querySelector('#openBtn').addEventListener('click', () => this.openNav());
        this.querySelector('#closeBtn').addEventListener('click', () => this.closeNav());
    }

    openNav() {
        this.querySelector("#myNav").style.width = "100%";
    }

    closeNav() {
        this.querySelector("#myNav").style.width = "0%";
    }
}

customElements.define('main-nav', Nav);



  