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
				{ version: 0.04, log: "FPS counter added" }
				{ version: 0.05, log: "Changelog sorted by version" },
				];
				$scope.changelog = changelog;
			}
		};
		$scope.linecount = 10;
	};

	var app = angular.module("aaApp", []);
	app.controller("aaController", aaController);

}());

