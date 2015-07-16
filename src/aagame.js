/**
 * @author objarni
 */

var AAGame = function () {
	var state = "TITLE";
	var handleEvent = function(e) {
		console.log('handleEvent' + e);
		console.log('state ' + state);
		state = "INGAME";
		console.log('state ' + state);
	};
	var getState = function() { return state; };
	var api = {
		getState: getState,
		handle: handleEvent
	};

	return api;
}
