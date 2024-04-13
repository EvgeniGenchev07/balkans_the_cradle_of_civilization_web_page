/*class Div extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ``;
    }
}
customElements.define('main-nav', Nav);
*/
const card_model=data=>`
<div class="wrapper">

            <div class="cols">
<div class="col" ontouchstart="this.classList.toggle('hover');">
<div class="container">
    <div class="front" style="background-image: url(${data.image})">
        <div class="inner">
            <p>DUBAI</p>
            <span>${data.name}</span>
        </div>
    </div>
    <div class="back">
        <div class="inner">
            <p>${data.info}</p>
            <button class="btnartf"><span>Open</span><span>Read more</span></button>
        </div>
    </div>
</div> </div>
</div>
`
console.log(red)
fetch('artifacts_data.json')
.then(response => response.json())
.then(data => {
    var artifacts = data.artifacts;
    for(var i = 0;i<artifacts.length;i++)
    {

        var artifact = artifacts[i];
        document.getElementById("artifacts").insertAdjacentHTML('beforeend',card_model({image:artifact.image,name:artifact.name,info:artifact.short_info}));
        console.log(green)
    }
});
