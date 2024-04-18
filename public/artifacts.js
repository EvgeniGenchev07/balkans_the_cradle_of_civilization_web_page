const card_model=data=>`
<div class="wrapper">
    <div class="cols">
        <div class="col" ontouchstart="this.classList.toggle('hover');">
            <div class="container">
                <div class="front" style="background-image: url(${data.image})">
                    <div class="inner">
                        <p>${data.title}</p>
                        <span>${data.name}</span>
                    </div>
                </div>
                <div class="back">
                <div class="inner">
                    <p>${data.info}</p>
                    <button  id="${data.id}" class="btnartf"><span>Open</span><span>Read more</span></button>
                </div>
            </div>
        </div> 
    </div>
</div>
`
const manta_model = data=>`<div class="manta" id="${'manta'+data.id}">
<div class="close-container" id="x_button">
    <div class="leftright"></div>
    <div class="rightleft"></div>
</div>
<div class="card" style="background: #fff url(${data.image}) 50% 50%">
    <div class="card-shine">
        <div class="card-shadow">
            <div class="wrap"></div>
        </div>
    </div>
</div>
<div class="card-info">
    <h2 class="card-title">${data.name}</h2>
    <p class="card-subtitle" id="modal">${data.info}</p> 
</div>
</div>`;
fetch('assets/metadata.json')
.then(response => response.json())
.then(data => {
    var artifacts = data.artifacts;
    for(var i = 0;i<artifacts.length;i++)
    {
        var artifact = artifacts[i];
        document.getElementById("artifacts").insertAdjacentHTML('beforeend',card_model({image:artifact.image,name:artifact.name,info:artifact.short_info,id:i}));
        document.getElementById("mantas").insertAdjacentHTML('beforeend',manta_model({image:artifact.image,name:artifact.name,info:artifact.short_info,id:i}));
        let modal_btn = document.getElementById(i);
        modal_btn.addEventListener('click',()=>{      
            document.getElementById('manta'+modal_btn.id).classList.add('show');
            document.getElementById('navigation').classList.add('hide');
            document.getElementById('artifacts').classList.add('unactive');
            document.getElementById('x_button').classList.add('show');
            document.body.classList.add('hide');
        });
        let x_buttons = document.getElementsByClassName('close-container');
        for(let j = 0; j<x_buttons.length;j++)
        {
            x_buttons[j].addEventListener('click',()=>{
                var mantas = document.getElementsByClassName('manta');
                for(var index = 0;index<mantas.length;index++)
                {
                    mantas[index].classList.remove('show')
                }
                document.getElementById('navigation').classList.remove('hide');
            document.getElementById('artifacts').classList.remove('unactive');
            document.getElementById('x_button').classList.remove('show');
                document.body.classList.remove('hide');
            });
        };
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
    }
});
