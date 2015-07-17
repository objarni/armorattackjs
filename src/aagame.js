/**
 * @author objarni
 */

var AAGame = function () {
	var state = "TITLE";
	var lives = 0;

	var handleEvent = function(sig, par) {
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
