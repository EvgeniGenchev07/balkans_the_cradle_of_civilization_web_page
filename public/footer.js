const footer =data=> `
<footer>            
<p>&copy; ${data.year} ${data.name} All rights reserved.</p>         
</footer>     
`;
fetch('assets/metadata.json')
.then(response => response.json())
.then(data => {
  class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = footer(data.footer);
    }
  }
  customElements.define('main-footer', Footer);
});

  document.getElementById("nav-toggle").addEventListener('click', ()=>{
    document.getElementById("nav_background").classList.toggle("show");
    document.getElementById("index_navigation").classList.toggle("hide");
  });