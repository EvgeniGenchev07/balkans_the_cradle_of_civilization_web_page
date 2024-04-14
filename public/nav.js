class Nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                body {
                    font-family: "Lato", sans-serif;
                }

                .sidebar {
                    height: 100%;
                    width: 0;
                    position:fixed;
                    z-index: 1;
                    top: 0;
                    left: 0;
                    background-color: #111;
                    overflow-x: hidden;
                    transition: 0.5s;
                    padding-top: 60px;
                }

                .sidebar a {
                    padding: 8px 8px 8px 32px;
                    text-decoration: none;
                    font-size: 25px;
                    color: #818181;
                    display: block;
                    transition: 0.3s;
                }

                .sidebar a:hover {
                    color: #f1f1f1;
                }

                .sidebar .closebtn {
                    position: absolute;
                    top: 0;
                    right: 25px;
                    font-size: 25px;
                    margin-left: 50px;
                }

                .openbtn {
                    font-size: 20px;
                    cursor: pointer;
                    background-color: #111;
                    color: white;
                    padding: 10px 15px;
                    border: none;
                    position: absolute; 
                    top: 10px; 
                    left: 10px; 
                    z-index: 2; 
                }

                .openbtn:hover {
                    background-color: #444;
                }

                #main {
                    transition: margin-left .5s;
                    padding: 16px;
                }

                @media screen and (max-height: 450px) {
                    .sidebar {padding-top: 15px;}
                    .sidebar a {font-size: 18px;}
                }
            </style>

            <div id="mySidebar" class="sidebar">
                <a href="#" class="closebtn">×</a>
                <a href="index.html">Начална страница</a>
                <a href="artifacts.html">Артефакти</a>
                <a href="timeline.html">Линия на времето</a>
                <a href="aboutus.html">За нас</a>
                <a href="contact.html">Контакти</a>
            </div>

            <div id="main">
                <button class="openbtn">☰</button>  
            </div>
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


  