(function () {
    'use strict';
    angular.module('Data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
    
    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {

        this.getAllCategories = function () {
            return $http({ url: ApiBasePath + "/categories.json" })
                .then(function (result) {

                    return result.data;
                });
        };

        this.getItemsForCategory = function (categoryShortName) {
            return $http({ url: ApiBasePath + '/menu_items.json?category='+categoryShortName })
                .then(function (result) {

                    return result.data.menu_items;
                });
        };
    }

})();


