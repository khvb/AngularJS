(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        
    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.html'
    })

    .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/categorieslist.html',
        controller: 'CategoriesListController as cat',
        resolve: {
            allCategories: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })

    .state('items', {
        url:'/items/{categoryName}',
        templateUrl: 'src/templates/itemslist.html',
        controller:'ItemsListController as items',
        resolve: {
            allItems:['MenuDataService','$stateParams', function (MenuDataService,$stateParams) {
                return MenuDataService.getItemsForCategory($stateParams.categoryName);
            }]
        }
    });

};
    

})();