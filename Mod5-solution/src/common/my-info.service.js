(function () {
'use strict';

angular.module('common')
.service('MyInfoService', MyInfoService);

function MyInfoService() {
  var myInfo = this;
  myInfo.info = {
    firstName: "",
    lastName: "",
    eMail: "",
    phoneNumber: "",
    shortName: ""
  };
  myInfo.item = null;
}

})();

