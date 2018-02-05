$(function() {

	// Give to even "Posts" classes
	$(".post").each(function(i) {
		i % 2 != 0 && $(this).addClass("post_reverse post_black");
	});

	// Parallax Scrolling
	function parallaxScrolling() {
		var controller = new ScrollMagic.Controller();

		$(".post").each(function() {
			var tlPostImg = new TimelineMax();

			// Set Timelines
			tlPostImg.fromTo( $(this).find(".post__img"), 60, {y: "250px", willChange: "transform"}, {y: "0px", willChange: "auto"})

			var parallaxPostImg = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 1,
				offset: 250,
				duration: "90%"
			})
			.setTween(tlPostImg)
			.addTo(controller)

		});
	}
	parallaxScrolling();

	function parallaxScrolling2() {
		var controller = new ScrollMagic.Controller();

		$(".post").each(function() {
			var tlPostInfo = new TimelineMax();

			// Set Timelines
			tlPostInfo.fromTo($(this).find(".post-info"), 1, {y: "320px", willChange: "transform"}, {y: "0px", willChange: "auto"})

			var parallaxPostInfo = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 0.8,
				offset: 200,
				duration: "90%"
			})
			.setTween(tlPostInfo)
			.addTo(controller)

		});
	}
	parallaxScrolling2()


});