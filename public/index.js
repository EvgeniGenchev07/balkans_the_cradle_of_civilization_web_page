const basic_information_model = (page,data) => `
<div class="overlay"></div>
<div class="container-fluid">
<h1 class="text-right info-text-title">${data.name}</h1>
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

</article>`;
const special_paragraph_model=data=>`
<article class="col-md-12">
                        <div class="overlay"></div>
                          <div class="content">${data}</div>
                      </article>`
const button_functions =()=>{
  document.querySelectorAll('.info-button').forEach(function(button) {
    button.addEventListener('click', function() {
        var btnTarget = this.getAttribute('data-target');
        var infoBox = document.getElementById(btnTarget);
        infoBox.classList.add('info-visible');
    });
});
document.querySelectorAll('.close-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var openInfoBox = this.closest('.info');
        openInfoBox.classList.remove('info-visible');
    });
});
}
const fetch_and_display= object_name=>{
    fetch('./assets/index_data.json')
  .then((response) => response.json())
  .then(data=>{
      var page_data = data[object_name];
    document.getElementById(object_name+'_jumbotron').insertAdjacentHTML('beforeend',basic_information_model(object_name,page_data.basic_information));
    document.getElementById(object_name+'_row').insertAdjacentHTML('beforeend',paragraph_model(page_data.first_paragraph));
    document.getElementById(object_name+'_row').insertAdjacentHTML('beforeend',paragraph_model(page_data.second_paragraph));
    document.getElementById(object_name+'_row').insertAdjacentHTML('beforeend',special_paragraph_model(page_data.special_paragraph));
    document.getElementById(object_name+'_row').insertAdjacentHTML('beforeend',paragraph_model(page_data.third_paragraph));
    button_functions();
  });
}
fetch_and_display('ancient_tooth');
fetch_and_display('caves');
fetch_and_display('varna');
fetch_and_display('alphabet');