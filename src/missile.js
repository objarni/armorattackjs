missilePolys = function() {

	var frame = Poly();
	frame.add(0.06, 0);
	frame.add(-0.03, -0.0075);
	frame.add(-0.03, 0.0075);
	frame.add(0.06, 0);

	var diamond = Poly();
	diamond.add( 0    ,  0.015 );
	diamond.add( 0.015,  0     );
	diamond.add( 0    , -0.015 );
	diamond.add(-0.015,  0     );
	diamond.add( 0    ,  0.015 );

	return [frame, diamond];
}
