(function() {

	aaController = function($scope) {

		$scope.toggle = function() {
			if( $scope.changelog )
				$scope.changelog = null;
			else {
				var changelog = [
				{ version: 0.01, log: "Empty HTML page" },
				{ version: 0.02, log: "Canvas added, yellow background" },
				{ version: 0.03, log: "Changelog added" },
				{ version: 0.04, log: "FPS counter added" },
				{ version: 0.05, log: "Changelog sorted by version" },
				{ version: 0.06, log: "Removed random lines, added jeep polys"},
				{ version: 0.07, log: "Added YouTube video to the side"},
				{ version: 0.08, log: "Improved layout, changed colors, links"},
				{ version: 0.09, log: "Jeep turnable"}
				{ version: 0.10, log: "Added state dump for debugging purposes"},
				];
				$scope.changelog = changelog;
			}
		};
		var links = [
			{ title: 'github', url: 'https://github.com/objarni/armorattackjs' },
			{ title: 'trello', url: 'https://trello.com/b/59wlFBWQ/armor-attack-js-version' },
			{ title: 'tests', url: 'tests.html' }
		];
		$scope.linecount = 10;
		$scope.links = links;
	};

	var app = angular.module("aaApp", []);
	app.controller("aaController", aaController);

}());

