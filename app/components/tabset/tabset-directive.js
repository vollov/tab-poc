'use strict';

angular.module('myApp.tabset.tabset-directive', [])
.directive('tabset', [function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'components/tabset/tabset.html'
  }
}])
.directive('tab', [function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'components/tabset/tab.html'
    // require: '^tabset',
    // scope: {
    //   heading: '@'
    // },
    // link: function(scope, elem, attr, tabsetCtrl) {
    //   scope.active = false;
    //   tabsetCtrl.addTab(scope);
    // }
  }
}])
;
