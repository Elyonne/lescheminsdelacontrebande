	// Enable the visual refresh
		google.maps.visualRefresh = true;
		var rendererOptions = {
				draggable: true
			};

	var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
	var directionsService = new google.maps.DirectionsService();
	var map;

	function initialize() {
		var mapOptions = {
	    	zoom: 7,
	    	mapTypeId: google.maps.MapTypeId.PLAN
	  	};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		directionsDisplay.setMap(map);
		directionsDisplay.setPanel(document.getElementById('directionsPanel'));

		google.maps.event.addListener(directionsDisplay, 'directions_changed', function() {
    		computeTotalDistance(directionsDisplay.getDirections());
  		});

	var ctaLayer = new google.maps.KmlLayer({
			url:'http://lescheminsdelacontrebande.fr/sites/default/files/kml/lhorlogeur/etapes.kml' //http://labo.fux.fr/maps/exemple.kml
		});
		ctaLayer.setMap(map);
	}

	google.maps.event.addDomListener(window, 'load', initialize);