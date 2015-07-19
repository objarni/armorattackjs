/**
 * @author objarni
 */

// Enable/disable debug mode
debug = true;

var AAGame = function () {
	var state = "TITLE";
	var lives = 0;
	var jeep = null;
	var deg = 0;
	var left = false;
	var right = false;

	var handleEvent = function(sig, par) {
		if ( debug )
			if ( sig !== 'Draw' && sig !== 'Tick' )
				console.log(sig, par);
			switch(sig) {

				case 'ControlDown':
				state = 'INGAME';
				lives = 3;
				if ( par === 'left' )
					left = true;
				if ( par === 'right' )
					right = true;
				break;

				case 'ControlUp':
				if ( par === 'left' )
					left = false;
				if ( par === 'right' )
					right = false;
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

				case 'Tick':
				var dt = par;
				var value = dt * 300;
				if ( left && !right )
					deg += value;
				if ( right && !left )
					deg -= value;
				break;

				case 'Draw':
				var gfx = par;
				if ( !jeep )
					jeep = jeepPolys();

				gfx.drawPosRotPolys(jeep, -0.9, -0.9, deg);
				break;
			}
		};

		var getState = function() { return state; };
		var getLives = function() { return lives; };

		var api = {
			handleEvent: handleEvent,
			getState: getState,
			getLives: getLives
		};

		return api;
	}
