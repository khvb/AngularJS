(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItemsDirective);


    function FoundItemsDirective() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'foundItems.html',
            scope: {
                found: "<",
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: "list",
            bindToController: true
        };
        return ddo;
    }

    function FoundItemsDirectiveController() {
        var list = this;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var list = this;
        list.searchTerm = "";

        list.getNarrowList = function () {
            if (list.searchTerm === "") {
                list.showMessage = true;
                list.found = [];
                return;
            }
            var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
            promise.then(function (response) {
                list.found = response;
                list.showMessage = (list.found.length < 1);
            });

            list.onRemove = function (index) {
                list.found.splice(index, 1);
                list.showMessage = (list.found.length < 1);
            };
        };
    }


    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {

            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (response) {
                service.data = response.data;
//console.log('service.data :', service.data);
                var narrowList = [];
                for (var i = 0; i < service.data.menu_items.length; i++) {
                    if (service.data.menu_items[i].description.indexOf(searchTerm) !== -1) {
                        narrowList.push(service.data.menu_items[i]);
                    }
                }
//console.log(narrowList);
                return narrowList;
            });

        }

    }

})();
