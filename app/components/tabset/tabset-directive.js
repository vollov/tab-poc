'use strict';

angular.module('myApp.tabset.tabset-directive', [])

.directive('appVersionx', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);
