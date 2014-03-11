//CONSTANTES
 

//VARIABLES GLOBALES
var $sousMenu;
	var $sousMenus;
	var $categorie, $xs_categorie;
	var $overlay;
	var $sideBarController;
	var $layout;
	var $slogan;
	var $titreSubmenu;
	
//DOCUMENT ONLOAD
$(function() {

	//INITIALISATION DES VARIABLES JQUERY
	$sousMenu = $('#submenu');
	$sousMenus = $("#submenu .panel-body").removeClass('visible');
	$categorie = $("#menu a");
	$xs_categorie = $("#submenu a.panel-heading");
	$overlay = $("#overlay");
	$sideBarController = $('#showSideBar.button');
	$layout = $('#layout');
	$slogan = $(".slogan").fitText(3);
	/*$titreSubmenu = $('.titre_submenu').fitText(1.2);*/

	//EVENTS

	//-->prevent default sur les ancres vides
	$('a').on("click", function() {
		if ($(this).attr('href') === "#") {
			return false;
		}
		
		if($(this).attr('href')=='#submenu'){
			$sousMenu.slideToggle();
			$sousMenus.hide();
			return false;
		}
		
	});

	//-->déploiement du menu
	$categorie.on("click", function() {
		var href = $(this).attr('href');
		
		//petit hack js pour éviter d'avoir un "saut" lors de la première ouverture du menu
			if ($sousMenus.filter(href).hasClass("visible")) {
				$sousMenus.filter(href).removeClass('visible');
				$overlay.removeClass('visible');
			} else {
				$sousMenus.filter(href).addClass('visible');
				$overlay.addClass('visible');
			}
			
			$sousMenus.not(href).removeClass('visible');
		return false;
	});
	
	$xs_categorie.on('click',function(){
		var href = $(this).attr('href');
		$(href).stop(true).slideToggle();
		return false;
		
	});
	

	//--> contrôle de la side bar.
	$sideBarController.on("click", function() {
		$sousMenus.removeClass('visible');
		$("#layout").toggleClass('visible');
		return false;
	});

//-->au clic sur l'overlay on replie tout.
	$overlay.on("click", function() {
		$sousMenus.removeClass('visible');
		$overlay.removeClass('visible');
		$layout.removeClass('visible');
	});


	
	media_query();
});