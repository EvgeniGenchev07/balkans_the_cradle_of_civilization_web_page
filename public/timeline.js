const timeline_model = (tittle,timeline_items) => tittle+=timeline_items+`</div></div>
</div>
</section>
</div>`;
const title = ``;
var dates_ul = `<ul id="dates">`
const item_model = data=>`
            <div class="js-timeline_item ag-timeline_item">
                <div class="ag-timeline-card_box">
                  <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                    <div class="ag-timeline-card_point">2021</div>
                  </div>
                  <div class="ag-timeline-card_meta-box">
                    <div class="ag-timeline-card_meta">Season 13</div>
                  </div>
                </div>
                <div class="ag-timeline-card_item">
                  <div class="ag-timeline-card_inner">
                    <div class="ag-timeline-card_img-box">
                      <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-13.png" class="ag-timeline-card_img" width="640" height="360" />
                    </div>
                    <div class="ag-timeline-card_info">
                      <div class="ag-timeline-card_title">Season 13</div>
                      <div class="ag-timeline-card_desc">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                        eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                        pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu.
                      </div>
                    </div>
                  </div>
                  <div class="ag-timeline-card_arrow"></div>
                </div>
              </div>`
              var timeline_items = ``;

fetch('assets/metadata.json')
.then(response => response.json())
.then(data => {
    var timeline = data.timeline;
    var line = timeline[0];
    for(var i = 1;i<timeline.length;i++)
    {
        line = timeline[i];
        document.getElementById("timeline").insertAdjacentHTML('beforeend',item_model({year:line.year,image:line.image,info:line.info}));
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
    console.log(timeline_items)
});