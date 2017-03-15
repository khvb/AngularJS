(function () {
    
    'use strict';
    
    angular.module('MenuApp')
        .controller('CategoriesListController', CategoriesListController);

    CategoriesListController.$inject = [ 'allCategories'];
    function CategoriesListController(allCategories) {

        this.allCategories = allCategories;
    }

})();