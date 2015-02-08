jQuery(function($){
	
	$.supersized({
		slides  :  	[ {image : '/images/mainback.jpg', title : 'Main Background'} ]
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

