const timeline_model = (dates,info,buttons) => dates+=info+buttons;
const buttons = `<div id="grad_top"></div>
<div id="grad_bottom"></div>
<a href="#" id="next" class="timelinr" >+</a>
<a href="#" id="prev" class="timelinr" >-</a>
</div>`;
var dates_ul = `<ul id="dates">`
var info_ul = `<ul id="issues">`
const selected_data_model = year=>`<li><a href="#${year}" class="selected">${year}</a></li>`
const data_model = year=>`<li><a href="#${year}">${year}</a></li>`
const selected_info_model = data=>`
<li id="${data.year}" class="selected">
    <img src="${data.image}" />
    <h1>${data.year}</h1>
    <p>${data.info}</p>
</li>`
const info_model = data=>`
<li id="${data.year}">
<img src="${data.image}" />
<h1>${data.year}</h1>
<p>${data.info}</p>
</li>`
fetch('assets/metadata.json')
.then(response => response.json())
.then(data => {
    var timeline = data.timeline;
    var line = timeline[0];
    dates_ul+=selected_data_model(line.year);
    info_ul+=selected_info_model({year:line.year,image:line.image,info:line.info});
    for(var i = 1;i<timeline.length;i++)
    {
        line = timeline[i];
        dates_ul+=data_model(line.year);
        info_ul+=info_model({year:line.year,image:line.image,info:line.info});
    }
    dates_ul+='</ul>'
    info_ul+='</ul>'
    document.getElementById("timeline").insertAdjacentHTML('beforeend',timeline_model(dates_ul,info_ul,buttons));
});