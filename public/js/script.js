/*AOS Animation Init*/
AOS.init({
	duration: 700, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
});
/*Parallax animation Init for banner*/
var scene1 = document.getElementById('scene_banner');
var parallaxInstance = new Parallax(scene1);
/*Parallax animation Init for footer*/
var scene2 = document.getElementById('scene_footer');
var parallax = new Parallax(scene2);

$(document).ready(function () {
	/*navigation toggle function for mobile*/
	$('#nav-icon2').click(function () {
		var _this = $(this);
		if (_this.hasClass('open')) {
			_this.removeClass('open')
			$('.navigation_view').fadeOut();
		} else {
			$('.navigation_view').fadeIn();
			_this.addClass('open')
		}
	});

	$('.footer_navigation .nav-link , .mobile_navigation .nav-link').on('click', function () {
		var _this = $(this);
		var _thisTarget = _this.attr('href');
		if (_thisTarget != 'javascript:;' && _thisTarget != '#' && $(_thisTarget).length) {
			if ($('#nav-icon2').hasClass('open')) {
				$('#nav-icon2').removeClass('open');
				$('.navigation_view').fadeOut('fast', function () {
					var _thisOffset = $(_thisTarget).offset().top;
					$('body,html').animate({ 'scrollTop': _thisOffset + 'px' });
				});
			} else {
				var _thisOffset = $(_thisTarget).offset().top;
				$('body,html').animate({ 'scrollTop': _thisOffset + 'px' });
			}
		}
		return false;
	});
});

