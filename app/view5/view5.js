'use strict';

angular.module('myApp.view5', [ 'ngRoute' ])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/view5', {
		templateUrl : 'view5/view5.html',
		controller : 'View5Ctrl'
	});
} ])

.controller('View5Ctrl', ['$scope', function($scope) {
	$scope.format = 'M/d/yy h:mm:ss a';
	$scope.name = 'Tobias';
}])
.directive('myCurrentTime', [ '$interval', 'dateFilter', function($interval, dateFilter) {

	function link(scope, element, attrs) {
		var format, timeoutId;

		function updateTime() {
			element.text(dateFilter(new Date(), format));
		}

		scope.$watch(attrs.myCurrentTime, function(value) {
			format = value;
			updateTime();
		});

		element.on('$destroy', function() {
			$interval.cancel(timeoutId);
		});

		// start the UI update process; save the timeoutId for canceling
		timeoutId = $interval(function() {
			updateTime(); // update DOM
		}, 1000);
	}

	return {
		link : link
	};
	
} ])
.directive('myDialog', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    templateUrl: 'view5/my-dialog.html'
  };
});
