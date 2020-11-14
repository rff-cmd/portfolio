$('#item-one').on("focus", function () {
	$(this).addClass("active rotate-scale-down-hor");
	if ($(this).hasClass("active")) {
		$(this).parent().find('p').css("display", "block");
	}
});

$('#item-one').on('focusout', function () {
	$(this).removeClass("active rotate-scale-down-hor");
	$(this).parent().find('p').css("display", "none");
});

$('#item-two').on("focus", function () {
	$(this).addClass("active rotate-scale-down-hor");
	if ($(this).hasClass("active")) {
		$(this).parent().find('p').css("display", "block");
	}
});

$('#item-two').on('focusout', function () {
	$(this).removeClass("active rotate-scale-down-hor");
	$(this).parent().find('p').css("display", "none");
});

$('#item-three').on("focus", function () {
	$(this).addClass("active rotate-scale-down-hor");
	if ($(this).hasClass("active")) {
		$(this).parent().find('p').css("display", "block");
	}
});

$('#item-three').on('focusout', function () {
	$(this).removeClass("active rotate-scale-down-hor");
	$(this).parent().find('p').css("display", "none");
});

$('#item-four').on("focus", function () {
	$(this).addClass("active rotate-scale-down-hor");
	if ($(this).hasClass("active")) {
		$(this).parent().find('p').css("display", "block");
	}
});

$('#item-four').on('focusout', function () {
	$(this).removeClass("active rotate-scale-down-hor");
	$(this).parent().find('p').css("display", "none");
});
