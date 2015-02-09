jQuery(function($){
	
	$.supersized({
		slides  :  	[ {image : '/images/mainback.jpg', title : 'Main Background'} ]
	});

	$('.navbar-nav a').click(function(){
	  $.scrollTo( this.hash, 1500, { easing:'swing' });
	  return false;
	});

	$(window).scroll(function() {
		if ($('.skillbar').is(':visible')) {
			jQuery('.skillbar').each(function(){
				jQuery(this).find('.skillbar-bar').animate({
					width:jQuery(this).attr('data-percent')
				},6000);
			});
		}
	});
});

