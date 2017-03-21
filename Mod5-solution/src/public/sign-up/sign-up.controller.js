(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService', 'MenuService'];
function SignUpController(MyInfoService, MenuService) {
  var signUpInfo = this;

  signUpInfo.info = {
    firstName: "",
    lastName: "",
    eMail: "",
    phoneNumber: "",
    shortName: ""
  };
  signUpInfo.submitted = false;

  signUpInfo.submit = function () {
    signUpInfo.submitted = true;
    signUpInfo.informationSaved = false;
    MenuService.getMenuItem(signUpInfo.info.shortName)
      .then(function (response) {
        MyInfoService.info = signUpInfo.info;
        MyInfoService.item = response;
        signUpInfo.informationSaved = true
      });
  }
}

})();
