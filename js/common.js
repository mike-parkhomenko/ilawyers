$(function() {

	///////////////////////////////////
	///////////////////////////////////
	//
	//// Opening Animations
	//
	///////////////////////////////////
	///////////////////////////////////

	function openingAnimations() {
		var tl = new TimelineMax();

		// Set Animations for Each Page
		tl.fromTo($(".preloader"), 0.7, {opacity: 1, display: "block", willChange: "opacity"}, {opacity: 0, display: "none", willChange: "auto", ease: Power4.easeOut}, "+=1.5")
			.fromTo($(".lines"), 1, {y: "-100%"}, {y: "0%", ease : Power4.easeOut})
			.fromTo($(".header_common"), 2, {y: "-200"}, {y: "0", ease: Power2.easeOut}, "-=1.65")
			.fromTo($(".main-screen_small .social-bar_desktop"), 2, {y: "200"}, {y: "0", ease: Power2.easeOut}, "-=2")
			.fromTo($(".main-screen_small .languages_desktop"), 2, {y: "200"}, {y: "0", ease: Power2.easeOut}, "-=2")
			.fromTo($(".main-screen_small .background-text"), 3, {opacity: "0", x: "-20"}, { opacity: "1", x: "0", ease: Power3.easeOut}, "-=0.3")
			.fromTo($(".page-name"), 3, {opacity: "0", x: "20"}, {opacity: "1", x: "0", ease: Power3.easeOut}, "-=3")
			.fromTo($(".main-screen_small .quotes"), 2, {opacity: 0, transform: "scale(0.92)"}, {opacity: 1, transform: "scale(1)", ease: Power2.easeOut}, "-=3")
			//.to($(".preloader"), 0.1, {willChange: "auto"});
	}

	///////////////////////////////////
	///////////////////////////////////
	//
	//// Parallax on Section Images
	//
	///////////////////////////////////
	///////////////////////////////////

	function parallaxImgs() {
		var controller = new ScrollMagic.Controller();

		$(".section-tile").each(function() {
			var tl = new TimelineMax();

			// Set Tween
			tl.fromTo($(this).find(".section-tile__img"), 1, {backgroundPosition: "50% 0%"}, {backgroundPosition: "50% 50%"});

			var parallaxScene = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 0.9,
				offset: 0,
				duration: "150%"
			})
			.setTween(tl)
			.addTo(controller);
		})
	}
	parallaxImgs();


	///////////////////////////////////
	///////////////////////////////////
	//
	//// Common fixes
	//
	///////////////////////////////////
	///////////////////////////////////

	function headerOnScroll() {
		var currentScroll = 0;
		var mainScreenHeight = 0;
		var headerHeight = 0;

		setTimeout(function() {
			mainScreenHeight = document.querySelector(".main-screen").offsetHeight;
			headerHeight = document.querySelector(".header").offsetHeight;
		},600);

		$(".header__wrap").addClass("header__wrap_show");

		$(window).on("scroll", function() {

			// Show|Hide Header on scroll
			if (currentScroll < $(window).scrollTop() ) {
				currentScroll = $(window).scrollTop();
				$(".header__wrap").removeClass("header__wrap_show");
			} else {
				$(".header__wrap").addClass("header__wrap_show");
				currentScroll = $(window).scrollTop();
			}

			// Color the Header on Scroll
			if ($(window).scrollTop() >= (mainScreenHeight - headerHeight) ) {
				$(".header__wrap").addClass("header__wrap_gray");
			} else {
				$(".header__wrap").removeClass("header__wrap_gray");
			}

		});

	$(window).scrollTop() > mainScreenHeight && $(".header__wrap").addClass("header__wrap_gray");

	}
	//headerOnScroll();


	///////////////////////////////////
	///////////////////////////////////
	//
	//// Open "Contact Us" on Desktop
	//
	///////////////////////////////////
	///////////////////////////////////

	// Show Openning Button on Scroll
	function showContactButton() {
		var tlContactBtn = new TimelineMax();

		// Set Animation Scene
		tlContactBtn.to($(".contact-btn"), 0.2, {x: 0, ease: Power3.easeOut}).pause();

		// Toggle Button on Scroll
		$(document).on("scroll", function() {
			$(this).scrollTop() > 350 ? tlContactBtn.play() : tlContactBtn.reverse();
		});

		// Show Button if Document SCrolled Enough
		$(this).scrollTop() > 350 && tlContactBtn.play();
	}
	//showContactButton();

	// Toggle Menu on Click
	function toggleContact() {
		var tlContacts = new TimelineMax();

		// Set Animation Timeline Scene
		tlContacts.to($("body"), 0.001, {className: "+=do-not-scroll"})
							.fromTo($(".side-form"), 0.2, {display: "none", opacity: "0"}, {display: "block", opacity: "1"})
							.fromTo($(".side-form__wrap"), 0.4, {opacity: 0, display: "none", x: 1000}, {opacity: 1, display: "block", x: 0, ease: Power3.easeOut})
							.pause();

		// Open "Contact us" on Button Click
		$(".contact-btn").on("click", function() {
			tlContacts.timeScale(1).play();
		});

		// Prevent Closing "Contact us" on Wrapper Click
		$(".side-form__wrap").on("click", function(e){e.stopPropagation()});

		// Close "Contact us"
		$(".side-form, .side-form__close").on("click", function() {
			tlContacts.timeScale(1.5).reverse();
		});

		return tlContacts;
	}
	//toggleContact();

	///////////////////////////////////
	///////////////////////////////////
	//
	//// Mobile Menu Toggling and Animations
	//
	///////////////////////////////////
	///////////////////////////////////

	// Burger Toggling
	function toggleMobileMenu() {
		var flag = 0;
		var currentScroll = 0;
		var tl = new TimelineMax();

		// Set Animation Timeline Scene
		tl.fromTo($(".side-mnu"), 0.3, {display: "none", opacity: 0}, {display: "block", opacity: 1}, "-=0.01")
			.fromTo($(".page-body"), 0.0001, {display: "block"}, {display: "none"})
			.fromTo($("body"), 0.0001, {height: "auto"}, {height: "0"})
			.staggerFromTo($(".nav-mnu-mobile li"), 0.5, {x: -200}, {ease: Power3.easeOut, x: 0}, 0.1)
			.fromTo($(".m-contact-btn"), 0.5, {x: -200}, {ease: Power3.easeOut, x: 0}, "-=0.3")
			.fromTo($(".side-mnu .social-bar"), 0.9, {ease: Power3.easeOut, opacity: 0}, {opacity: 1}, "-=0.3")
			.fromTo($(".side-mnu .languages"), 0.9, {ease: Power3.easeOut, opacity: 0}, {opacity: 1}, "-=0.9")
			.to($(".header"), 0, {backgroundColor: "transparent", position: "fixed"})
			.pause();

		// Toggle Animation
		$(".burger").on("click", function() {
			$("body").toggleClass("do-not-scroll");
			$(this).toggleClass("burger_active");

			if (flag == 0) {
				currentScroll = $(window).scrollTop();
				tl.timeScale(1).play();
				flag = 1
			} else {
				flag = 0;
				tl.timeScale(2.5).reverse();
				
				setTimeout(function() {
					$(window).scrollTop(currentScroll);
				}, 650)
			}
		});

		return tl;
	}
	//toggleMobileMenu();

	// Contact us Toggling on Mobile Devices
	function toggleContactsMobile() {
		var tlContactsMobile = new TimelineMax({});

		// Set Animation Timeline Scene
		tlContactsMobile.to($(".burger"), 0.01, {display: "none"})
				.fromTo($(".contact-us-close-mb"), 0.01, {display: "none"}, {display: "block"})
				.staggerTo($(".nav-mnu-mobile li"), 0.5, {x: -200, ease: Power3.easeIn}, 0.05)
				.to($(".m-contact-btn"), 0.5, {x: -200, ease: Power3.easeIn}, "-=0.4")
				.to($(".side-mnu .social-bar"), 0.7, {ease: Power3.easeOut, opacity: 0}, "-=1")
				.to($(".side-mnu .languages"), 0.7, {ease: Power3.easeOut, opacity: 0}, "-=1")
				.fromTo($(".contact-us"), 0.5, {display: "none", opacity: "0"}, {display: "block", opacity: "1"})
				.to($(".logo-svg path"), 0.5, {fill: "#333"}, "-=0.5")
				//.to($(".header"), 0,, {backgroundColor: "#fff"})
				.to($(".contact-us-close-mb"), 0.5, {className: "+=contact-us-close-mb_active"}, "-=0.5")
				.pause();

		// Open "Contact us" Menu with Animation
		$(".m-contact-btn").on("click", function() {
			tlContactsMobile.play();
		});

		// Close "Contact us" Menu with Animation
		$(".contact-us-close-mb").on("click", function() {
			tlContactsMobile.reverse();
		});

		return tlContactsMobile;
	}
	//toggleContactsMobile();

	///////////////////////////////////
	///////////////////////////////////
	//
	//// Fixes for Resize Event
	//
	///////////////////////////////////
	///////////////////////////////////

	function fixesOnWindowResize() {

		$(window).on("resize", function() {

			// Fixes for Animations
//			if ( currentWindowWidth != $(window).width() ) {
//				toggleContactsMobile().restart().pause();
//				toggleMobileMenu().restart().pause();
//				toggleContact().restart().pause();
//				showContactButton();
//			}

			if ($(window).width() > 768) {
				$(".burger").css("display", "none");

				// Fixes for Animations
				toggleMobileMenu.timeScale(2).reverse();
				toggleContactsMobile.timeScale(2).reverse();

			} else if ($(window).width() <= 768) {
				$(".burger").css("display", "block");

				// Fixes for Animations
				toggleContact.timeScale(2).reverse();
				showContactButton.timeScale(2).reverse();
			}

		});
	}
	//fixesOnWindowResize()

//	$(window).on("resize", function() {
//		if ($(window).width() > 768) {
//			$(".burger").css("display", "none");
//		} else if ($(window).width() <= 768) {
//			$(".burger").css("display", "block");
//		}
//	});

	///////////////////////////////////
	///////////////////////////////////
	//
	//// Fixes for WP
	//
	///////////////////////////////////
	///////////////////////////////////
	
	// Add Class for WP Form
	$(".wpcf7").each(function() {
		$(this).addClass("f-contact clearfix");
	});

	$(".tabs a").on("click", function(e) {e.preventDefault();})

	// Will Change Memory Saving
	$(".contact-btn, .side-form").hover(function() {
		$(".side-form__wrap").css("will-change", "transform");
	}, function() {
		$(".side-form__wrap").css("will-change", "auto");
	});

	$(".teammate").hover(function() {
		$(this).find(".teammate-imgs li").css("will-change", "opacity");
		$(this).find(".teammate-info__hover").css("will-change", "opacity");
		$(this).siblings(".teammate-popup").css("will-change", "opacity");
		$(this).siblings(".teammate-popup").find(".teammate-popup__wrap").css("will-change", "transform");
	}, function() {
		$(this).find(".teammate-imgs li").css("will-change", "auto");
		$(this).find(".teammate-info__hover").css("will-change", "auto");
		$(this).siblings(".teammate-popup").css("will-change", "auto");
		$(this).siblings(".teammate-popup").find(".teammate-popup__wrap").css("will-change", "auto");
	});

	///////////////////////////////////
	///////////////////////////////////
	//
	//// Tabs Sliding and Switching
	//
	///////////////////////////////////
	///////////////////////////////////

	// Items Counter
	var itemsNum = 10;
	
	if ($(window).width <= 1200) {
		itemsNum = 7
	} else if ($(window).width <= 768) {
		itemsNum = 6
	} else if ($(window).width <= 480) {
		itemsNum = 4
	}

	if ($(".tabs li").length <= itemsNum) {

		// Slider for Tabs
		$(".tabs").owlCarousel({
			items: $(".tabs li").length,
			loop: false,
			dots: true,
			autoWidth: true,
			center: false,
			mouseDrag: false
		});

		//$(".tabs-outer").css("width", "600px")

	} else {

		// Slider for Tabs
		$(".tabs").owlCarousel({
			items: $(".tabs li").length,
			loop: true,
			dots: true,
			autoWidth: true,
			center: true,
			mouseDrag: true
		});

	}

	// Switch between Tabs
	$(".tabs .owl-item").on("click", function() {
		$(".tabs .owl-item").find("li").removeClass("active-tab").eq( $(this).index() ).addClass("active-tab");
		$(".tab-item").hide().eq( $(this).index() ).fadeIn();
	}).eq(0).addClass("active-tab");

	headerOnScroll();
	showContactButton();
	toggleContact();
	toggleMobileMenu();
	toggleContactsMobile();
	fixesOnWindowResize()
	openingAnimations();

});
