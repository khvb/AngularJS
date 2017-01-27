(function () {
    'use strict';

    angular.module('TestApp', [])

        .controller('TestController', TestController);

	      TestController.$inject = ['$scope'];

        function TestController($scope) {
            $scope.lunchlist = "";

            $scope.displayRecomendation = function () {
                $scope.nodata = "";
                $scope.resolution="";
                if ($scope.lunchlist == "")
                    $scope.nodata = "Please enter data first"
                else {
// remove spaces
                    var re = / /g;
		                var list1 = $scope.lunchlist.replace(re, '');
		    		        var items=[];
                    items=list1.split(",");
// count only nonempty entries
                    var quantityofitem=0;
                    for (var i=0; i<items.length; i++) {
                      if (items[i] > "")
                        quantityofitem++;
                    }
                    if (quantityofitem>3)
                        $scope.resolution="Too much!"
                    else
                        $scope.resolution="Enjoy!";
		  };
            };
        }
})();
