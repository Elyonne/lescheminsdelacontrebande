$(function() {
//CONSTANTES


//VARS
	var $sousMenu = $(".submenu > div").hide();
	var $categorie = $("#menu a");
	var $overlay = $("#overlay");
	var $sideBarController = $('#showSideBar.button');
	var $layout = $('#layout');
	//EVENTS

	//prevent default sur les ancres vides
	$('a').on("click", function() {
		if ($(this).attr('href') === "#") {
			return false;
		}
	});

	//déploiement du menu
	$categorie.on("click", function() {
		var href = $(this).attr('href');
		$layout.removeClass('visible');
		$sousMenu.not(href).slideUp("normal", function() {
			if ($sousMenu.filter(href).is(":visible")) {
				$sousMenu.filter(href).slideUp();
				$overlay.removeClass('visible');
			} else {
				$sousMenu.filter(href).slideDown();
				$overlay.addClass('visible');
			}
		});
		return false;
	});
	
	$sideBarController.on("click",function(){
			$sousMenu.slideUp();
		$("#layout").toggleClass('visible');
				return false;

	});

//au clic sur l'overlay
	$overlay.on("click", function() {
		$sousMenu.slideUp();
		$overlay.removeClass('visible');
		$layout.removeClass('visible');
	});


});