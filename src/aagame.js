/**
 * @author objarni
 */

var AAGame = function () {
	var state = "TITLE";
	var lives = 0;

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
				var poly = Poly();
				for(var i = 0; i < 10; i++) {
					poly.add(randrange(-1, 1), randrange(-1, 1));
				}
				gfx.clear();
				gfx.drawPoly(poly);
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
