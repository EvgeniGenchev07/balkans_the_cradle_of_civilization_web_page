class Nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                .opnbtn{
                    font-size:30px;
                    cursor:pointer;
                    float:right; 
                }
                /* Your overlay CSS */
                .overlay {
                    height: 100%;
                    width: 0;
                    position: fixed;
                    z-index: 1;
                    top: 0;
                    left: 0;
                    background-color: rgb(0,0,0);
                    background-color: rgba(0,0,0, 0.9);
                    overflow-x: hidden;
                    transition: 0.5s;
                }

                .overlay-content {
                    position: relative;
                    top: 25%;
                    width: 100%;
                    text-align: center;
                    margin-top: 30px;
                }

                .overlay a {
                    padding: 8px;
                    text-decoration: none;
                    font-size: 36px;
                    color: #818181;
                    display: block;
                    transition: 0.3s;
                }

                .overlay a:hover, .overlay a:focus {
                    color: #f1f1f1;
                }

                .overlay .closebtn {
                    position: absolute;
                    top: 20px;
                    right: 45px;
                    font-size: 60px;
                }

                @media screen and (max-height: 450px) {
                    .overlay a {
                        font-size: 20px;
                    }
                    .overlay .closebtn {
                        font-size: 40px;
                        top: 15px;
                        right: 35px;
                    }
                }
            </style>
            <div id="myNav" class="overlay">
                <a href="javascript:void(0)" class="closebtn" id="closeBtn">&times;</a>
                <div class="overlay-content">
<<<<<<< HEAD
                    <a href="index.html">Home</a>
                    <a href="artifacts.html">Artefacts</a>
                    <a href="aboutus.html">About us</a>
                    <a href="contact.html">Contact</a>
                </div>
            </div>
            <span style="font-size:30px;cursor:pointer" id="openBtn">&#9776; </span>
=======
                    <a href="index.html">Начална страница</a>
                    <a href="timeline.html">Линия на времето</a>
                    <a href="artifacts.html">Артефакти</a>
                    <a href="aboutus.html">За нас</a>
                    <a href="contact.html">Контакти</a>
                </div>
            </div>
            <span class="opnbtn" id="openBtn">&#9776;</span>
>>>>>>> ae7856053f03605da2e885cda66d8c5747f638dd
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



  