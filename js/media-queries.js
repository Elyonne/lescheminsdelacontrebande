function media_query(){

var BREAKPOINT = {
	xs: 768
	, sm: 991
	, md: 1199
};

var DEVICE_WIDTH = $(window).width();

$(window).resize(function() {
	DEVICE_WIDTH = $(window).width();
	this.update();
});

this.update = function() {
	
	if (DEVICE_WIDTH < BREAKPOINT.xs) {
//--> xs


	} else if (DEVICE_WIDTH < BREAKPOINT.sm) {
//--> xs,sm


	} else if (DEVICE_WIDTH < BREAKPOINT.md) {
//--> xs,sm,md


	} else {
//--> ALL


	}

	if (DEVICE_WIDTH > BREAKPOINT.md) {
//--> lg


	} else if (DEVICE_WIDTH > BREAKPOINT.sm) {
//--> md,lg


	} else if (DEVICE_WIDTH > BREAKPOINT.xs) {
//--> sm,md,lg


	} else {
//-->	ALL
		$sousMenu.css({
			display: "block"
		});
		$sousMenu.find('.collapse').css({
			display: "block"
		});
		

	}
};


this.update();
}