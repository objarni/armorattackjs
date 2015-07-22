jeepPolys = function() {
	var frame = Poly();
	frame.add(-0.04, 0.025);
	frame.add( 0.04, 0.025);
	frame.add( 0.04,-0.025);
	frame.add(-0.04,-0.025);
	frame.add(-0.04, 0.025);
	var bonnet = Poly();
	bonnet.add(0.04, 0.010);
	bonnet.add(0.0, 0.025);
	bonnet.add(0.0,-0.025);
	bonnet.add(0.04,-0.010);

	return [frame, bonnet];
}

JeepFSM = function() {
	var state = 'STILL';
	var rotDir = 0;
	var right = 0;
	var left = 0;
	var jeep = null;
	var rad = 0;
	var x = 0;
	var y = 0;

	var updateLeftRight = function(sig, par) {
		if ( sig !== 'ControlDown' && sig !== 'ControlUp')
			return;
		if ( par !== 'left' && par !== 'right')
			return;

		var pressed = sig === 'ControlDown';
		var isLeft = par === 'left';

		if ( isLeft && pressed )
			left = 1;

		if ( !isLeft && pressed )
			right = 1;

		if ( isLeft && !pressed )
			left = 0;

		if ( !isLeft && !pressed )
			right = 0;
	};

	var handleEvent = function(sig, par) {

		if ( sig === 'Draw' ) {
			var gfx = par;
			if ( !jeep )
				jeep = jeepPolys();
			gfx.drawPosRotPolys(jeep, x, y, rad);
		}

		switch(state) {

			case 'STILL':
			if ( sig === 'ControlDown' && par === 'gas')
				state = 'FORWARD';
			updateLeftRight(sig, par);
			if ( (left + right) % 2 == 1) {
				rotDir = left ? 1 : -1;
				state = 'ROTATING';
			}
			break;

			case 'ROTATING':
			if ( sig === 'Tick' ) {
				var dt = par;
				rad += rotDir * dt * 5;
			}
			updateLeftRight(sig, par);
			if ( (left + right) % 2 == 0) {
				rotDir = 0;
				state = 'STILL';
			}
			break;

			case 'FORWARD':
			if ( sig === 'ControlUp' && par === 'gas')
				state = 'STILL';
			if ( sig === 'Tick' ) {
				var dt = par;
				x += dt * Math.cos(rad);
				y += dt * Math.sin(rad);
			}
			break;
		}

	}
	return {
		handleEvent: handleEvent,
		getState: function() { return state; },
		getRotationSign: function() { return rotDir; },
		name: "Jeep"
	};
};