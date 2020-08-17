$(function() {
	
	$(".toggle-mnu").click(function() {
		if (($(window).width()) < 768) {
			$(this).toggleClass("on");
			$(".menu").slideToggle();
		};
		return false;
	});
	  
	$('.menu a').on("click", function() {
		if (($(window).width()) < 768) {
			$('.toggle-mnu').toggleClass('on');
			$(".menu").slideToggle();
		};
	});

	$(".menu").on("click", "a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'), 
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$(".facts").waypoint(function() {
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".fact-item__number").each(function () {
			var tcount = $(this).data("count");
			$(this).animateNumber({
				number: tcount,
				easing: 'easeInQuad',
				numberStep: comma_separator_number_step
			},
			1200);
		});
	}, {
		offset : "85%"
	});

	$(document).ready(function(){
		$(".reviews-wrapper").owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			autoHeight: true,
			nav: true,
			dots: false,
			autoplay: true,
			autoplayHoverPause: true,
			fluidSpeed: 600,
			autoplaySpeed: 600,
			navSpeed: 600,
			dotsSpeed: 600,
			dragEndSpeed: 600,
			navText: ["<img src='img/dest/arrow-left.png'>","<img src='img/dest/arrow-right.png'>"]
		});
	});

	$('.work-item').magnificPopup({
		type: 'image',
		fixedContentPos: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});

	$('.popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	// accordion
	!function(i) {
		var o, n;
		i(".accordion-header").on("click", function() {
		  o = i(this).parents(".accordion_item"), n = o.find(".info"),
			o.hasClass("active_block") ? (o.removeClass("active_block"),
			  n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
			  o.siblings(".active_block").removeClass("active_block").children(
				".info").stop(!0, !0).slideUp())
		})
	}(jQuery);

});
