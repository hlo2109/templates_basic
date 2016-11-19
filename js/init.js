(function($){
  $(function(){

    $('.button-collapse').sideNav();

    $('.materialboxed').materialbox();
	resizeslider();
	$('.slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    items:1,
	    dots:false,
	    animateOut: 'fadeOut',
	    mouseDrag:false,
	    touchDrag:true,
	    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	    autoplay:6000,		
	})
	$('a[href*=#]').click(function() {
	     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	         && location.hostname == this.hostname) {

	             var $target = $(this.hash);

	             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

	             if ($target.length) {

	                 var targetOffset = $target.offset().top;

	                 $('html,body').animate({scrollTop: targetOffset-64}, 1000);

	                 return false;

	            }

	       }

	   });
    $(window).resize(function(){
		resizeslider();
	})
  }); // end of document ready
})(jQuery); // end of jQuery name space

function resizeslider(){
	$(".slider .items").css({"height":$(window).height()});
	$(".slider").css({"height":$(window).height()});
}