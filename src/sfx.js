AASfxDriver = function() {
	var jeepFire = new Howl({
		urls: ['jeep_fire.mp3'],
		sprite: { fire: [0, 682] }
	});

	var api = {
		playSoundEffect: function(name) {
			jeepFire.play('fire');
		}
	};

	return api;
};

