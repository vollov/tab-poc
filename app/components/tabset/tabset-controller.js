'use strict';

angular.module('myApp.tabset.tabset-controller', [])
.controller('TabSetCtrl', [function() {
  var self = this;
  self.tabs = [];

  self.addTab = function addTab(tab) {
    self.tabs.push(tab);
    if(self.tabs.length === 1) {
      tab.active = true;
    }
  };

  self.select = function(selectedTab) {
    if(selectedTab.disabled) { return; }

    console.log('selected tab=%j', selectedTab.heading);

    angular.forEach(self.tabs, function(tab) {
      console.log('check active tab=%j in tabs', tab.heading);

      if (tab.active && tab !== selectedTab) {
        console.log('disable past active tab=%j', tab.heading);
        tab.active = false;
      }
    })

    selectedTab.active = true;
  };
      
}]);
