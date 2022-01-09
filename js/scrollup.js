$(function(){
		
	//reset scrolla
	$.scrollTo(0);
	
	//przewijanie okna
	$(window).scroll(function(){		
		var x = window.innerWidth;
		if(x>980){
			if($(this).scrollTop()>300) $(".scrollup").fadeIn();
			else $(".scrollup").fadeOut();
		}
	});
		
	//po kliknieciu
	$(".scrollup").click(function() { 
		$('html, body').animate({scrollTop : 0},360);
		return false;
	});				
});

		
		
		