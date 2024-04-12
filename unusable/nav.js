
class Nav extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <style>
      nav {
        background-color: #666;
        padding: 10px;
        text-align: center;
        animation: fadeIn 1s ease-in-out;
    }
    
    
    
    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    
    nav ul li {
        display: inline;
        margin-right: 20px;
    }
    
    nav ul li:last-child {
        margin-right: 0;
    }
    
    nav ul li a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: #666;
        transition: background-color 0.3s;
    }
    
    nav ul li a:hover {
        background-color: #333;
    }
      </style>
      <nav>
            
      <ul>
          <li><a href="index2.html">Home</a></li>
          <li><a href="aboutus.html">About</a></li>
          <li><a href="artifacts.html">Artifacts</a></li>
          <li><a href="timeline.html">Timeline</a></li>
          <li><a href="contact.html">Contact</a></li>
      </ul>
      </nav>
      `;
    }
  }
  customElements.define('main-nav', Nav);

  