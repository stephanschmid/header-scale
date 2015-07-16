//.header is the div i wanna animate

function headerScale() {

	var introSection = $('.header'),
		introSectionHeight = introSection.height(),
		scaleSpeed = 0.2,
		opacitySpeed = 1;
	var MQ = 1;

	triggerAnimation();
	$(window).on('resize', function(){
		triggerAnimation();
	});

	function triggerAnimation() {
		if($(window).width()>= MQ) {
			$(window).on('scroll', function(){
				window.requestAnimationFrame(animateIntro);
			});
		} else {
			$(window).off('scroll');
		}
	}
	function animateIntro() {
		var scrollPercentage = ($(window).scrollTop()/introSectionHeight).toFixed(5),
			scaleValue = 1 + scrollPercentage / 2 * scaleSpeed;
		if( $(window).scrollTop() < introSectionHeight) {
			introSection.css({
				'-moz-transform': 'scale(' + scaleValue + ') translateZ(0)',
				'-webkit-transform': 'scale(' + scaleValue + ') translateZ(0)',
				'-ms-transform': 'scale(' + scaleValue + ') translateZ(0)',
				'-o-transform': 'scale(' + scaleValue + ') translateZ(0)',
				'transform': 'scale(' + scaleValue + ') translateZ(0)'
			});
		}
	}
}