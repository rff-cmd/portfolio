// u can change the motion easy  fadeOutUp fadeInDown with any animation u want
wow = new WOW({
	boxClass: 'wow', // default
	animateClass: 'animated', // default
	offset: 0, // default
	mobile: true, // default
	live: true // default
})
wow.init();

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
	didScroll = true;
});

setInterval(function () {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

	// Make sure they scroll more than delta
	if (Math.abs(lastScrollTop - st) <= delta)
		return;

	// If they scrolled down and are past the navbar, add class .nav-up.
	// This is necessary so you never see what is "behind" the navbar.
	if (st > lastScrollTop && st > navbarHeight) {
		// Scroll Down
		$('nav').addClass('animated fadeOutUp').addClass('pswp--animate_opacity');
	} else {
		// Scroll Up
		if (st + $(window).height() < $(document).height()) {
			$('nav').removeClass('pswp--animate_opacity').removeClass('animated fadeOutUp').addClass('animated fadeInDown');
		}
	}

	lastScrollTop = st;
}
