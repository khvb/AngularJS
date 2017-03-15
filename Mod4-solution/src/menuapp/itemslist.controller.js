(function () {
    
    'use strict';
    
    angular.module('MenuApp')
        .controller('ItemsListController', ItemsListController);
    
    ItemsListController.$inject = ['allItems','$stateParams'];
    function ItemsListController(allItems, $stateParams) {

        this.allItems = allItems;
        this.categoryClicked = $stateParams.categoryName;

    }

})();