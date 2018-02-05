$(function() {

  // Teammate Popup
  function teammatePopup() {
    var tlArray = [];

    // Create Timeline for Each Popup
    $(".teammate").each(function(i) {
			var tl = new TimelineMax();
      tlArray.push(tl);

      // Set Animations for Each Popup
      tlArray[i].fromTo($(".teammate-popup").eq(i), 0.2, {display: "none", opacity: "0"}, {display: "block", opacity: "1"})
								//.fromTo( $(".teammate-popup .teammate-imgs"), 0.8, {opacity: 0}, {opacity: 1, ease: Power3.easeOut}) // Temporarily Deprecated
								.fromTo( $(".teammate-popup .teammate-popup__wrap").eq(i), 0.5, {y: 500}, {y: 0, ease: Power3.easeOut}, "-=0.1")
								.to($("body"), 0.001, {className: "+=do-not-scroll"})
								.pause();
    });

    // Open Teammate Popup
    $(".teammate-imgs, .teammate-info h3, .teammate-info__more-btn").on("click", function() {
      tlArray[$(".teammate").index($(this).parents(".teammate"))].timeScale(1).play();
    });

    // Close Teammate Popup
    $(".teammate-popup__close").on("click", function() {
      tlArray[$(".teammate-popup__close").index($(this))].timeScale(1.5).reverse();
    });
		 $(".teammate-popup").on("click", function() {
      tlArray[$(".teammate-popup").index($(this))].timeScale(1.5).reverse();
    });

    // Prevent Closing Popup on Wrapper Click
    $(".teammate-popup__wrap, .teammate-popup__header").on("click", function(e) {e.stopPropagation()});
  }
  teammatePopup();

  // Give Classes with Numbers to ".teammate" and ".teammate-popup"
  $(".teammate").each(function(i) {
    $(this).addClass("teamamte_" + (i + 1));
  });
  $(".teammate-popup").each(function(i) {
    $(this).addClass("teammate-popup_" + (i + 1));
  });

  function randomQuote() {
    var randomNum = Math.floor(Math.random() * $(".quotes").length);
    var quoteLength = $(".quotes").length;
    
    for (var i = 0; i < quoteLength; i++) {
      i != randomNum  && $(".quotes").eq(i).css("top", "-1000000px");
    }
	}
	randomQuote();

});