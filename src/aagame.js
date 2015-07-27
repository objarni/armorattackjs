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
				if ( app ) {
					var wallCollisionService = {
						tryMoveFromTo: function(from, to) {
							var newPos = { x: to.x, y: to.y };
							if ( newPos.x > 0 ) {
								newPos.x = 0;
							}
							return newPos;
						}
					}
					app.addMachine(JeepFSM(wallCollisionService));
				}
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
				var gfx = par;
				var terrain = Poly();
				terrain.add(0, 1);
				terrain.add(0, -1);
				gfx.drawPoly(terrain);
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
