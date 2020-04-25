$(function () {

    $(window).scroll(function(){
        if($(document).scrollTop()>$(window).height()){
          $('.scrolltotop').show();
      }else{
          $('.scrolltotop').hide();
      }
    });
    $('.scrolltotop').click(function(){
        $('html,body').animate({scrollTop: 0}, 1000);
    });

    var navbar = $("#navbar"),
		header = $("#home").innerHeight(),
		scrollOffset = $(window).scrollTop();

	/* Fixed Header */

	checkScroll(scrollOffset);
	
	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

	});

	function checkScroll(scrollOffset) {
		if( scrollOffset >= header ) {
			navbar.addClass("fixed");
		} else {
			navbar.removeClass("fixed");
		}
    }


    $("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this),
		 	blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top;


		$("html, body").animate({
			scrollTop: blockOffset
		}, 700);
    });
    
    
})