(function() {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MyInfoService'];
function MyInfoController(MyInfoService) {
  var myInfo = this;
  myInfo.info = MyInfoService.info;
  myInfo.item = MyInfoService.item;
}
})();
