const timeline_model_concat = (model_1,model_2) => model_1+=model_2;
const title_model =title=> `<div class="ag-timeline_title">${title}</div>`;
const left_item_model= data=>`          <div class="js-timeline_item ag-timeline_item">
<div class="ag-timeline-card_box">
  <div class="js-timeline-card_point-box ag-timeline-card_point-box">
    <div class="ag-timeline-card_point">${data.year}</div>
  </div>
  <div class="ag-timeline-card_meta-box">
    <div class="ag-timeline-card_meta">${data.title}</div>
  </div>
</div>
<div class="ag-timeline-card_item">
  <div class="ag-timeline-card_inner">
    <div class="ag-timeline-card_img-box">
      <img src="${data.image}" class="ag-timeline-card_img" width="640" height="360" />
    </div>
    <div class="ag-timeline-card_info">
      <div class="ag-timeline-card_title">${data.title}</div>
      <div class="ag-timeline-card_desc">${data.info}</div>
    </div>
  </div>
  <div class="ag-timeline-card_arrow"></div>
</div>
</div>

`
const right_item_model = data=>`
<div class="js-timeline_item ag-timeline_item">
<div class="ag-timeline-card_box">
  <div class="ag-timeline-card_meta-box">
    <div class="ag-timeline-card_meta">${data.title}</div>
  </div>
  <div class="js-timeline-card_point-box ag-timeline-card_point-box">
    <div class="ag-timeline-card_point">${data.year}</div>
  </div>
</div>
<div class="ag-timeline-card_item">
  <div class="ag-timeline-card_inner">
    <div class="ag-timeline-card_img-box">
      <img src="${data.image}" class="ag-timeline-card_img" width="640" height="360" alt="" />
    </div>
    <div class="ag-timeline-card_info">
      <div class="ag-timeline-card_title">${data.title}</div>
      <div class="ag-timeline-card_desc">${data.info}</div>
    </div>
  </div>
  <div class="ag-timeline-card_arrow"></div>
</div>
</div>`
const timeline_function=()=>{
  (function ($) {
    $(function () {
  
  
      $(window).on('scroll', function () {
        fnOnScroll();
      });
  
      $(window).on('resize', function () {
        fnOnResize();
      });
  
  
      var agTimeline = $('.js-timeline'),
        agTimelineLine = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('.js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline_item'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag = false;
  
      function fnOnScroll() {
        agPosY = $(window).scrollTop();
  
        fnUpdateFrame();
      }
  
      function fnOnResize() {
        agPosY = $(window).scrollTop();
        agHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        agFlag = false;
  
        agTimelineLine.css({
          top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
        });
  
        f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }
  
      function fnUpdateProgress() {
        var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
        i = agTop + agPosY - $(window).scrollTop();
        a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
        n = agPosY - a + agOuterHeight / 2;
        i <= agPosY + agOuterHeight / 2 && (n = i - a);
        agTimelineLineProgress.css({height: n + "px"});
  
        agTimelineItem.each(function () {
          var agTop = $(this).find(agTimelinePoint).offset().top;
  
          (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
        })
      }
  
      function fnUpdateFrame() {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
  
  
    });
  })(jQuery);
}
const intetration = (length,timeline) =>{
  for(let i = 0;i<length;i+=2)
    {
        let left_item_data = timeline[i];
        let right_item_data = timeline[i+1];
        let left = left_item_model(left_item_data);
        let right = right_item_model(right_item_data);
        document.getElementById("timeline").insertAdjacentHTML('beforeend',timeline_model_concat(left,right));
        timeline_function()
        
    }
}

fetch('assets/metadata.json')
.then(response => response.json())
.then(data => {
  document.getElementById("title").insertAdjacentHTML('beforeend',title_model(data.timeline.title));
  let timeline = data.timeline.body;
  let timeline_length = timeline.length;
    if(timeline_length%2==1)
    {
      intetration((timeline_length-1),timeline)
      let left_item_data = timeline[timeline_length-1];
      document.getElementById("timeline").insertAdjacentHTML('beforeend',left_item_model(left_item_data));
    }
    else intetration(timeline_length,timeline)
});
