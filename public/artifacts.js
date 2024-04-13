/*class Div extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ``;
    }
}
customElements.define('main-nav', Nav);
*/
const card_model=data=>`<div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src=${data.image}>
              </div>
              <div class="flip-card-back">
                <h1>${data.name}</h1>
                <p>${data.info}</p>
              </div>
            </div>
          </div>`
fetch('../assets/artifacts_data.json')
.then(response => response.json())
.then(data => {
    var artifacts = data.artifacts;
    for(var i = 0;i<artifacts.length;i++)
    {
        var artifact = artifacts[i];
        document.getElementById("artifacts").insertAdjacentHTML('beforeend',card_model({image:artifact.image,name:artifact.name,info:artifact.short_info}));
    }
});
