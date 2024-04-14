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
            
            <button  id="${data.id}" class="btnartf"><span>Open</span><span>Read more</span></button>
        </div>
    </div>
</div> </div>
</div>
`
/* <div class="card" id="${'modal-container'+data.id}">
            <div class="card_content">
                <div class="card_gloss">
                    <p class="card_description" id="modal"></p>
                </div>
            </div>
        </div> */
fetch('assets/artifacts_data.json')
.then(response => response.json())
.then(data => {
    var artifacts = data.artifacts;
    for(var i = 0;i<artifacts.length;i++)
    {
        var artifact = artifacts[i];
        document.getElementById("artifacts").insertAdjacentHTML('beforeend',card_model({image:artifact.image,name:artifact.name,info:artifact.short_info,id:i}));
        let modal_btn = document.getElementById(i);
        modal_btn.addEventListener('click',()=>{      
            //modal_btn.closest('.modal-container').classList.add('show')
            document.getElementById('modal-container'+modal_btn.id).classList.add('show');
        });
    }
});
var 
$card = $('.card'),
$cardTitle = $('.card-title'),
$cardSubtitle = $('.card-subtitle'),
$cardShine = $('.card-shine'),
$cardShadow = $('.card-shadow'),
currentMousePos = { x: 0, y: 0 },
mouseFromCenter = { x: 0, y: 0 };

$(document).mousemove(function(event) {
	var
	wHeight= $(window).height(),
	wWidth= $(window).width();

	currentMousePos.x = event.pageX;
	currentMousePos.y = event.pageY;
	mouseFromCenter.x = currentMousePos.x - (wWidth / 2);
	mouseFromCenter.y = currentMousePos.y - (wHeight / 2);
	
	var 
	around1 = -1 * (currentMousePos.y * 100 / wHeight * 0.2 - 10) + 'deg',
	around2 = 1 * (currentMousePos.x * 100 / wWidth * 0.2 - 10) + 'deg',
	trans1 = (currentMousePos.x * 100 / wHeight * 0.3 ) + 'px',
	trans2 = (currentMousePos.y * 100 / wHeight * 0.3 ) + 'px',
	dy = event.pageY - wHeight / 2, //@h/2 = center of poster
	dx = event.pageX - wWidth / 2, //@w/2 = center of poster
	theta = Math.atan2(dy, dx), // angle between cursor and center of poster in RAD
	angle = theta * 180 / Math.PI - 90,  
	mousePositionX = ( currentMousePos.x / wWidth) * 100,
	mousePositionY = 50+( currentMousePos.y / wHeight)*10;

	// gradient angle and opacity for card shine effect
	$cardShine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + (currentMousePos.y / wHeight) * .7 + ') 0%,rgba(255,255,255, 0) 80%)');
	// card pos and angle
	$card.css({
	"-webkit-transform": "translate3d(" + trans1 + ", " + trans2 +", 0) scale(1) rotatex(" + around1 + ") rotatey(" + around2 + ")",'background-position': mousePositionX + '%' + ' ' + (currentMousePos.y / wHeight) * 50  + '%'
	});
	// card shadow pos and angle
	$cardShadow.css({"transform": "scale(.9,.9) translateX(" + ((mouseFromCenter.x * -0.02) + 12) + "px) translateY(" + ((mouseFromCenter.y * -0.02) + 12 ) + "px) scale(1.0) rotateY(" + (mouseFromCenter.x / 25) * 0.5 + "deg) rotateX(" + ((mouseFromCenter.y / -25) ) + "deg)" });

	$cardTitle.css({"transform": "translateX(" + ((mouseFromCenter.x / 25) * 0.7) + "px) translateY(" + ((mouseFromCenter.y / 25) * 1.65) + "px)"
	});

	$cardSubtitle.css({"transform": "translateX(" + ((mouseFromCenter.x / 25) * 0.5) + "px) translateY(" + ((mouseFromCenter.y / 25) * 1.15) + "px) translateZ(60px)"
	});
});