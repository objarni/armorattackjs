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
