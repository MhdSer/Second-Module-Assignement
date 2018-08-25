(function () {
'use restrict';

angular.module('ShoppingStore1',[])
.controller('ToBuyController',ToBuyController )
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListService',ShoppingListService)

ToBuyController.$inject=['ShoppingListService'];
function ToBuyController(ShoppingListService){

  var toBuy = this;

  toBuy.getToBuyList = function (){
    return ShoppingListService.getToBuyList();
  }
  toBuy.buyItem = function(itemIndex){
    ShoppingListService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject=['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService){

  var alreadyBought = this;

  alreadyBought.getAlreadyBoughtList = function (){
    return ShoppingListService.getAlreadyBoughtList();
  }
  alreadyBought.checkOff = function(itemIndex){
    ShoppingListService.checkOff(itemIndex);
  }
}

function ShoppingListService(){
  var service = this;
  var toBuy = [ {name : 'Cookies', quantity : 10},
                {name : 'Chocolate Bar', quantity : 20},
                {name : 'Chees Cake', quantity : 30},
                {name : 'Marshmallow', quantity : 15},
                {name : 'Jelly Bean', quantity : 30}, ];

  var alreadyBought = [];

  service.buyItem = function(itemIndex){
    var item = toBuy[itemIndex];
    toBuy.splice(itemIndex,1);
    alreadyBought.push(item)
  }

  service.checkOff = function(itemIndex){
    var item = alreadyBought[itemIndex];
    alreadyBought.splice(itemIndex,1);
    toBuy.push(item)
  }

  service.getToBuyList = function(){
    return toBuy;
  }

  service.getAlreadyBoughtList = function(){
    return alreadyBought;
  }

}

})();
