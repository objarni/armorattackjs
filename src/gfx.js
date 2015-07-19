// API 0.1
// Användare anger 1 ... N punkter som utgör en polygon i koordinatsystemet
// (-1.0, -1.0) x (1.0, 1.0). Punkten (-1, -1) ligger nere till vänster
// i browserns canvasdiv. Punkten (0, 0) ligger i centrum. Polygoner är öppna. 

// Exempel, rita en punkt (skott från tank):
// var poly = Poly();
// poly.add(-0.1, -0.2);
// drv.poly(poly); // x1, y1

// Exempel 2, rita rektangel (jeep):
// var poly = Poly();
// poly.add(-0.1, -0.2);
// poly.add(-0.1, 0.2);
// poly.add(0.1, 0.2);
// poly.add(-0.1, -0.2);
// drv.drawPoly(poly);

Poly = function() {
	var vertices = [];
	var poly = {
		add: function(x, y) {
			vertices.push(x, y);
		},
		vertices: vertices
	};
	return poly;
}

AAGfxDriver = function(ctx2d, size) {
	// Transform from "2D graphics coordinate system" to "AA coordinates"
	ctx2d.resetTransform();
	ctx2d.translate(size/2, size/2);
	ctx2d.scale(size/2, -size/2);
	ctx2d.lineWidth = 2.5/size;
	ctx2d.strokeStyle = '#aaffaa';
	var api = {
		drawPoly: function(poly) {
			ctx2d.beginPath();
			ctx2d.moveTo(poly.vertices[0], poly.vertices[1]);
			for (var i = 0; i < poly.vertices.length; i += 2)
				ctx2d.lineTo(poly.vertices[i], poly.vertices[i+1]);
			ctx2d.stroke();
		},
		drawPosRotPolys: function(polys, x, y, deg) {
			ctx2d.save();
			ctx2d.translate(x, y);
			var rad = deg * 0.0174532925;
			ctx2d.rotate(rad);
			polys.forEach(function(poly) {
				api.drawPoly(poly);
			});
			ctx2d.restore();
		},
		clear: function() {
			ctx2d.clearRect(-1, -1, 2, 2);
		}
	}
	return api;
}
