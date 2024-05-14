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
const special_paragraph_model=(name,data)=>`
<article class="col-md-12">
                        <div class="overlay"></div>
                          <div id="${name}_map" class="content">${data}</div>
                      </article>`
const scrollFunction = ()=>{
  const sectionAlphabet = document.getElementById('alphabet');
  const sectionVarna=document.getElementById('varna');
  const sectionPrehistory=document.getElementById('ancient_tooth');

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const deltaY = event.key === 'ArrowDown' ? 100 : -100;
        sectionAlphabet.scrollBy({
            top: deltaY,
            behavior: 'smooth'
        });

        sectionVarna.scrollBy({
            top: deltaY,
            behavior: 'smooth'
        });
        sectionPrehistory.scrollBy({
          top: deltaY,
          behavior: 'smooth'
      });
    }
});
}
var maps = new Array();
var maps_ids = ["varna_map","caves_map","ancient_tooth_map","alphabet_map"]
var first_time_display_flag = true;
const createMaps=()=>{
  fetch('./assets/index_maps_data.json')
  .then((response) => response.json())
  .then(data=>{
    data.maps_data.forEach(element => {
    var map = document.createElement('iframe');
    map.setAttribute('id',element.id);
    map.setAttribute('style',element.style);
    map.setAttribute('class',element.class);
    map.setAttribute('width',element.width);
    map.setAttribute('height',element.height);
    map.setAttribute('src',element.src);
    maps.push(map);
    })
  });
}
const findAndAppendMap=(place,id)=>{
  document.getElementById(place).appendChild(maps.find(el=>el.id===id));
}
const removeMap=()=>{
  maps_ids.forEach(el=>{
    let nodes = document.getElementById(el).childNodes;
    for(var i = 0; i < nodes.length; i++) {
    document.getElementById(el).removeChild(nodes[i]);
    }
  })
}

const fetch_and_display= object_name=>{
    fetch('./assets/index_data.json')
  .then((response) => response.json())
  .then(data=>{
      var page_data = data[object_name];
    document.getElementById(object_name+'_jumbotron').insertAdjacentHTML('beforeend',basic_information_model(object_name,page_data.basic_information));
    document.getElementById(object_name+'_row').insertAdjacentHTML('beforeend',paragraph_model(page_data.first_paragraph));
    document.getElementById(object_name+'_row').insertAdjacentHTML('beforeend',paragraph_model(page_data.second_paragraph));
    document.getElementById(object_name+'_row').insertAdjacentHTML('beforeend',special_paragraph_model(object_name,page_data.special_paragraph));
    document.getElementById(object_name+'_row').insertAdjacentHTML('beforeend',paragraph_model(page_data.third_paragraph));
  });
}
fetch_and_display('ancient_tooth');
fetch_and_display('caves');
fetch_and_display('varna');
fetch_and_display('alphabet');
createMaps();
scrollFunction();
document.getElementById('caves_anchor').addEventListener('click',()=>{
  removeMap();
  findAndAppendMap('caves_map','kozarnika_map')
  findAndAppendMap('caves_map','magurata_map')

});
document.getElementById('ancient_tooth_anchor').addEventListener('click',()=>{
  console.log(maps)
  removeMap();
  findAndAppendMap('ancient_tooth_map','ancient_tooth_place_map')

});
document.getElementById('alphabet_anchor').addEventListener('click',()=>{
  removeMap();
  findAndAppendMap('alphabet_map','alphabet_place_map')

});
document.getElementById('varna_anchor').addEventListener('click',()=>{
  removeMap();
  findAndAppendMap('varna_map','cemetry_varna_map')

});