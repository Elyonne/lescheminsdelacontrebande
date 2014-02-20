$(function() {
//CONSTANTES


//VARS
	var sousMenu = $(".submenu > div").slideUp();
	var categorie = $("#menu a");
	//EVENTS
	categorie.on("click", function() {
		var href = $(this).attr('href');
		sousMenu.not(href).slideUp("normal",function(){
					sousMenu.filter(href).slideToggle();
		});
		
		/*if (sousMenu.not(href).hasClass("open")) {
			sousMenu.not(href)
											.removeClass("open")
											.delay(500)
											.queue(function() {
												sousMenu.filter(href)
																				.addClass("open");
											});
		} else {
			console.log(false);
			sousMenu.filter(href).toggleClass("open");
		}*/
		return false;
	});
	$('a').on("click", function() {
		if ($(this).attr('href') === "#") {
			return false;
		}
	});
});