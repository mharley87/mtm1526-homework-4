// JavaScript Document

$(document).ready(function() {
    $('.tab-buttons a').on('click', function (ev) {
		
		
	var tabToShow = $(this).attr('href');
	console.log(tabToShow);	
	$('.current').hide('slow');
	$(tabToShow).show('slow');
	
	$('.current').removeClass('current');
	$(tabToShow).removeClass('current');
	 
    $(tabToShow).addClass('current'); 
	
	  

	
});
});





/*$(document).ready(function() {
	
	$('.slides img:not(:first-child)').hide();
	
	$('#next').on('click', function () {
	 var current = $('.slides .current').index();	
	var next = current + 1;

	
	if (next > $('.slides img').length -1){
		next = 0;
	}
	
	$('.slides .current').fadeOut(500, function() {
		$('.slides img').eq(next).fadeIn(500).addClass('current');
		
	
	$(this).removeClass('current');
	
	});
	
	});
	
		});
	
	$(document).ready(function() {
		
	$('.slides img:not(:first-child)').hide();
	
	$('#prev').on('click', function () {
	 var current = $('.slides .current').index();	
	var prev = current - 1;
	
	if (prev < 0){
		prev = $('.slides img').length -1;
	}
	
	$('.slides .current').fadeOut(500, function() {
		$('.slides img').eq(prev).fadeIn(500).addClass('current');
		
	
	$(this).removeClass('current');




	console.log(current);
	});
	
});

});

*/
