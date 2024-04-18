const basic_information_model = data = `
<div class="nav-container">
<button class="info-button" data-target="info1">${data.information_title_1}</button>
<button class="info-button" data-target="info2">${data.information_title_2}</button>
<button class="info-button" data-target="info3">${data.information_title_3}</button>
</div>

<div class="info-container">
<div class="info" id="info1">
  <span class="close-btn" aria-label="close button">X</span>
  <h3 class="info-title">${data.information_title_1}</h3>
    <p class="info-list"> ${data.information_text_1}</p>
  <h3 class="info-title">${data.information_title_1}</h3>
  <p class="info-list"> ${data.information_text_1}</p>
</div>
</div>

<div class="info-container">
<div class="info" id="info2">
  <span class="close-btn" aria-label="close button">X</span>
  <h3 class="info-title">${data.information_title_2}</h3>
  <p class="info-list"> ${data.information_text_2}</p>
</div>
<!-- /.info -->
</div>
<!-- /.info-container -->
<div class="info-container">
<div class="info" id="info3">
  <span class="close-btn" aria-label="close button">X</span>
  <h3 class="info-title">${data.information_title_3}</h3>
  <p class="info-list"> ${data.information_text_3}</p>
</div>
<!-- /.info -->
</div>
<!-- /.info-container -->


<div class="overlay"></div>
<div class="container-fluid">
<h1 class="text-right">${data.name}</h1>
<p class="lead text-right">
  ${data.description_first_half} <br> ${data.description_second_half}
</p>
</div>
</div>`;
const paragraph_model=data=>`<article class="col-md-6">
<h2 class="text-center">${data.paragraph_title}</h2>
<p>
  ${data.paragraph_information}
</p>
<p class="text-center">
  <a href="${data.paragraph_link}" class="btn btn-primary" target="_blank">Visit the ${data.paragraph_title} Page</a>
</p>
</article>`;
const fetch_and_display= object_name=>{
    fetch('./assets/index_data.json')
  .then((response) => response.json())
  .then(data=>{
    var page_data = data.object_name;
    document.getElementById('basic_information').closest('#'+object_name).insertAdjacentHTML('beforeend',basic_information_model(page_data.basic_information));
    document.getElementById('first_paragraph').insertAdjacentHTML('beforeend',paragraph_model(page_data.first_paragraph));
    document.getElementById('second_paragraph').closest('#'+object_name).insertAdjacentHTML('beforeend',paragraph_model(page_data.second_paragraph));
    document.getElementById('third_paragraph').closest('#'+object_name).insertAdjacentHTML('beforeend',paragraph_model(page_data.third_paragraph));
  });
}
document.addEventListener("varna", () => {
    fetch_and_display('varna');
});
document.addEventListener("ancient_tooth", () => {
    fetch_and_display('ancient_tooth');
});
document.addEventListener("caves", () => {
    fetch_and_display('caves');
});
document.addEventListener("alphabet", () => {
    fetch_and_display('alphabet');
});