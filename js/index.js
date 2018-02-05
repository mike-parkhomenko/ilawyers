$(function() {

	///////////////////////////////////
	///////////////////////////////////
	//
	//// First Screen Scene with GSAP
	//
	///////////////////////////////////
	///////////////////////////////////

	// First Scene
	var user = detect.parse(navigator.userAgent);

	function enterScene() {
		var tl = new TimelineMax({});
		var lineDown = $(".chess-board__line-up-to-down");
		var lineHorizontal = document.querySelectorAll(".chess-board__horizontal");
		var lineVertical = document.querySelectorAll(".chess-board__vertical_origin");
		var lineVerticalMask = document.querySelectorAll(".chess-board__vertical_mask");
		var chessSquares = document.querySelectorAll(".chess-board__square");
		var lineDownWrap = document.querySelector("#line-up-to-down");
		var chessFigure = document.querySelector(".chess-figure_figure");
		var chessFigureShadow = document.querySelector(".chess-figure_shadow");
		var header = document.querySelector(".header_main");
		var socialBar = document.querySelector(".main-screen_full .social-bar_desktop");
		var languages = document.querySelector(".main-screen_full .languages_desktop");
		var preloader = document.querySelector(".preloader");
		var ownerInfo = document.querySelector(".owner-info");
		var quotes = document.querySelector(".quotes");

		function enterSceneForAll() {
			tl.to(preloader, 0.6, {opacity: 0, display: "none", ease: Power2.easeOut}, "+=1")
				.from(lineDownWrap, 1.5, {y: "-50%", ease: Power0.easeNone}, "-=0.5")
				.to(lineVertical, 0.5, {strokeDashoffset: 0, ease: Power0.easeNone})
				.staggerTo(lineHorizontal, 0.5, {opacity: 0.3, transition: "opacity"}, 0.25)
				.staggerTo(lineHorizontal, 0.5, {opacity: 0, transition: "opacity"}, 0.25)
				.to(lineDownWrap, 2, {transformOrigin: "0% 100%", scaleY: "0", ease: Power0.easeNone}, '-=3.5')
				.to(lineVerticalMask, 1.5, {strokeDashoffset: 0, ease: Power0.easeNone}, "-=1.5")
				.staggerTo(chessSquares, 0.7, {opacity: 0.1, ease: Power3.easeIn}, 0.1, "-=4.2")
				.from(header, 2, {y: -200, ease: Power2.easeOut}, "-=3")
				.from(socialBar, 2, {y: 200, ease: Power2.easeOut}, "-=3")
				.from(languages, 2, {y: 200, ease: Power2.easeOut}, "-=3")
				.fromTo(chessFigure, 3, {display: "none", opacity: 0, scale: 0.6, ease: Power2.easeOut}, {display: "block", opacity: 0.5, scale: 0.7, ease: Power2.easeOut}, "-=1.5")
				.fromTo(ownerInfo, 2, {opacity: 0, y: 20, ease: Power2.easeOut}, {opacity: 1, y: 0, ease: Power2.easeOut}, "-=3")
				.fromTo(quotes, 2, {opacity: 0, y: 20, ease: Power2.easeOut}, {opacity: 1, y: 0, ease: Power2.easeOut}, "-=2.6")
				.to($(".main-screen_full .background-text"), 3, {opacity: 1, scale: "1", fill: "#393939", ease: Power2.easeOut}, "-=2")
		}

		function enterSceneForEdge() {
			tl.from(lineDownWrap, 3, {transform: "scaleY(0.5)", ease: Power0.easeNone})
				.to(lineVertical, 0.5, {strokeDashoffset: 0, ease: Power0.easeNone})
				.staggerTo(lineHorizontal, 0.5, {opacity: 0.3, transition: "opacity"}, 0.25)
				.staggerTo(lineHorizontal, 0.5, {opacity: 0, transition: "opacity"}, 0.25)
				.to(lineDownWrap, 0.9, {transformOrigin: "0% 100%", scaleY: "0", ease: Power0.easeNone}, '-=1.9')
				.to(lineVertical, 0.9, {strokeDashoffset: -600, ease: Power0.easeNone}, '-=1.9')
				.staggerTo(chessSquares, 0.7, {opacity: 0.1, ease: Power3.easeIn}, 0.1, "-=4.2")
				.to($(".background-text__svg"), 3, {scale: "1", fill: "#393939", ease: Power2.easeOut}, "-=1")
				.fromTo(chessFigure, 2, {display: "none", opacity: 0, scale: 0.68, ease: Power2.easeOut}, {display: "block", opacity: 0.5, scale: 0.7, ease: Power2.easeOut}, "-=2.2")
				.from(header, 1, {y: -200, ease: Power2.easeOut}, "-=2")
		}

		user.browser.family != "Edge" ? enterSceneForAll() : enterSceneForEdge();
	}

	// Chess Figure Hover
	$(".chess-figure_figure").hover(function() {
		TweenMax.to(document.querySelector(".chess-figure_figure"), 2, {scale: 1, opacity: 1, ease: Power2.easeOut})
	}, function() {
		TweenMax.to(document.querySelector(".chess-figure_figure"), 2, {scale: 0.7, opacity: 0.5, ease: Power2.easeOut})
	});

	///////////////////////////////////
	///////////////////////////////////
	//
	//// Scroll Functions
	//
	///////////////////////////////////
	///////////////////////////////////

	// Custom Scrollbar
	$(".section-tile__text-wrap").mCustomScrollbar({
		theme: "minimal-dark"
	});

	///////////////////////////////////
	///////////////////////////////////
	//
	//// Animating Elements on Page
	//
	///////////////////////////////////
	///////////////////////////////////

	// ScrollMagic Controller
//	var controller = new ScrollMagic.Controller();
//
//	// Paralax Scroll
//	function paralaxScroll() {
//		$(".section-tile").each(function() {
//			var parallaxScene = new ScrollMagic.Scene({
//				triggerElement: this,
//				//triggerHook: 0.7,
//				duration: 1000
//			})
//			.setTween(TweenMax.fromTo(this.querySelector(".section-tile__img"), 2, {y: "-150px", ease: Power0.easeNone}, {y: "150px", ease: Power0.easeNone}))
//			.addTo(controller)
//		});
//	}
//	paralaxScroll();

	enterScene();

});
