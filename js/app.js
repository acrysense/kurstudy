$(document).ready(function() {
	// Scrolling to section
	$('[href^="#"]').click(function() {
		var heightCount = $($(this).attr('href')).offset().top;
		$('html,body').animate({
			scrollTop: heightCount
		}, 1000);
		return false;
	});
});