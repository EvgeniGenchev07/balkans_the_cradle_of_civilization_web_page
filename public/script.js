// function varna_anchor_clicked(){
// 	document.getElementById('varna_dublicate').classList.remove('hide_content')
// 	document.getElementById('wrap').classList.add('hide_content')
// 	//document.getElementById('alphabet_dublicate').classList.add('hide_content')
// }
// 	function alphabet_anchor_clicked(){
//  	//document.getElementById('alphabet_dublicate').classList.remove('hide_content')
//  	document.getElementById('wrap').classList.add('hide_content')
//  	//document.getElementById('varna_dublicate').classList.add('hide_content')
// }
(function(document, window, $){
	
	$(document).ready(function(){

		// Variables
		var 
			windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			$header = $('header');

		// header anchor tags
		function headerAnchors(){
			var pageDirection = '';
			var thisElement;
			var timeout;
			$header.find('nav li a').click(function(event){
			// document.getElementById('wrap').classList.remove('hide_content');
			// if(this.id==='varna_anchor') varna_anchor_clicked();
			// if(this.id==='alphabet_anchor') alphabet_anchor_clicked();
				event.preventDefault();
					$('.cube').removeClass('reverse-' + pageDirection);
				thisElement = $(this);
				pageDirection = thisElement.data('direction');
				reverseDirection = thisElement.data('reverse-direction');
				thisElement.parent().addClass('active').siblings().removeClass('active');
					$('.cube').addClass('reverse-' + pageDirection);
					$header.addClass('go-out');
					$('#wrap').addClass('active');
					var target = thisElement.data('target');
					$('#'+target+'frame').addClass('hidemap')
				clearTimeout(timeout);
				timeout = setTimeout(function(){
					$header.removeClass('go-out');
					$('#wrap').removeClass('active');
				}, 1000);
			});
		}headerAnchors();
		$(window).resize(function(){

			// Vars
				windowWidth = $(window).width();
				windowHeight = $(window).height();
			// Functions
		});
	});
	
})(document, window, jQuery);

