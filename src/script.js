(function() {

	aaController = function($scope) {

		$scope.toggle = function() {
			if( $scope.changelog )
				$scope.changelog = null;
			else {
				var changelog = [
				{ version: 0.01, log: "Empty HTML page" },
				{ version: 0.02, log: "Canvas added, yellow background" },
				{ version: 0.03, log: "Changelog added" }
				];
				$scope.changelog = changelog;
			}
		};
	};

	var app = angular.module("aaApp", []);
	app.controller("aaController", aaController);

}());

