(function () {
'use strict'

angular.module('ShoppingListCheckOffApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy= this;

    toBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();
    toBuy.buyItem = function(itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.boughtList = ShoppingListCheckOffService.getBoughtList();

}

function ShoppingListCheckOffService() {
    var listCheck = this;
    var toBuyList = [{ name: "cookies", quantity: 1 },
     { name: "carrots", quantity: 5 },
     { name: "oranges", quantity: 2 },
     { name: "pears", quantity: 3 },
     { name: "apples", quantity: 8 }
    ];
    var boughtList = [];

    listCheck.buyItem = function (itemIndex) {
        boughtList.push(toBuyList[itemIndex]);
        toBuyList.splice(itemIndex, 1);
    };

    listCheck.getToBuyList = function () {
        return toBuyList;
    };

    listCheck.getBoughtList = function () {
        return boughtList;
    };
}

})();
