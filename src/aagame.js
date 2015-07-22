/**
 * @author objarni
 */

// Enable/disable debug mode
debug = true;

var AAGame = function (app) {
	var state = "TITLE";
	var lives = 0;
	var timeAcc = 0;

	var handleEvent = function(sig, par) {
		if ( debug ) {
			if ( sig !== 'Draw' && sig !== 'Tick' ) {
				console.log(sig, par);
			}
		}

		switch(state) {

			case 'TITLE':
			switch(sig) {
				case 'ControlDown':
				state = 'INGAME';
				lives = 2;
				if ( app )
					app.addMachine(JeepFSM());
				break;
			}
			break;
			
			case 'INGAME':
			switch(sig) {
				case 'NoMoreWaves':
				state = 'GAMEFINISHED';
				break;

				case 'PlayerHit':
				lives -= 1;
				if ( lives == 0 )
					state = 'GAMEOVER';
				else {
					state = 'DEAD';
					timeAcc = 0;
				}

				break;

				case 'Draw':
				break;
			}
			break;
			
			case 'DEAD':
			if ( sig === 'Tick' ) {
				var dt = par;
				timeAcc += dt;
				if ( timeAcc > 3 ) {
					state = 'INGAME';
				}
			}
			break;
			
			case 'GAMEFINISHED':
			switch(sig) {

			}
			break;
			
		}
	};

	var getState = function() { return state; };
	var getLives = function() { return lives; };

	var api = {
		handleEvent: handleEvent,
		getState: getState,
		getLives: getLives,
		name: "AAGame"
	};

	return api;
}
