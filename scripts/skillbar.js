var temp = 0; 

$(window).scroll(function() {
	if (temp == 0) {
		var hT = $('#parallaxcomp').offset().top,
			hH = $('#parallaxcomp').outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();
		 console.log((hT-wH) , wS);
		if (wS > (hT+hH-wH)){
		 jQuery(document).ready(function(){
		 jQuery('.skillbar').each(function(){
			 jQuery(this).find('.skillbar-bar').animate({
				 width:jQuery(this).attr('data-percent')
			 },3000);
              temp = 1;
              return;
			  
		 });
	 });
		};
		
		
     
     }
 
	 });
