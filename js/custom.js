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


$(window).load(function() {
  var $container = $('.creations-container');

  $container.isotope({
    // options...
    resizable: false, // disable normal resizing
    // set columnWidth to a percentage of container width
    masonry: { columnWidth: 1}

  });

  $('.creations-filter a').click(function(){
      $('.creations-filter .current').removeClass('current');
      $(this).addClass('current');

      var selector = $(this).attr('data-filter');
      $container.isotope({
          filter: selector,
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
       });
       return false;
      }); 

});
