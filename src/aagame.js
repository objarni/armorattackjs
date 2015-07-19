/**
 * @author objarni
 */

// Enable/disable debug mode
debug = true;

var AAGame = function () {
	var state = "TITLE";
	var lives = 0;
	var jeep = null;

	var handleEvent = function(sig, par) {
		if ( debug )
			if ( sig !== 'Draw' )
				console.log(sig, par);
		switch(sig) {
			case 'ControlDown':
				state = 'INGAME';
				lives = 3;
				break;
			case 'NoMoreWaves':
				state = 'GAMEFINISHED';
				break;
			case 'PlayerHit':
				lives -= 1;
				if ( lives == 0 )
					state = 'GAMEOVER';
				else
					state = 'DEAD';
				break;
			case 'Draw':
				var gfx = par;
				if ( !jeep )
					jeep = jeepPolys();

				gfx.drawPosRotPolys(jeep, -0.9, -0.9, -45);
				break;
		}
	};

	var getState = function() { return state; };
	var getLives = function() { return lives; };

	var api = {
		handle: handleEvent,
		getState: getState,
		getLives: getLives
	};

	return api;
}
