$('.scroll').hide();


$(window).scroll(function () {
  var footer = $("#footer-landing").height()-2;
  var scrollLen = $(document).height() - $(window).height() - footer;
  if ($(this).scrollTop() >= scrollLen){
    $('.scroll').css( 'bottom', '3.2em');
  } else {
    $('.scroll').css( 'bottom', '0');
  }

	if ($(this).scrollTop() > 100) {
		$('.scroll').fadeIn();
	} else {
		$('.scroll').fadeOut();
	}

});

$('.scroll').click(function(){
			$('html, body').animate({ scrollTop: 0 }, 1300);
				return false;
});

$('#search-btn').on('click', function(e){
    $( '#search-input' ).animate({width: 'toggle'}, 'fast' , function(){$(this).val('')});
});
