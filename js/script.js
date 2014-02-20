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
		return false;
	});
	$('a').on("click", function() {
		if ($(this).attr('href') === "#") {
			return false;
		}
	});
});