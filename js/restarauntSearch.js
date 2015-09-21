restarauntSearch.controller('RestarauntsCtrl', function RestarauntsCtrl($scope) {
  $scope.restaraunts = [
    {name: "Pizza Heaven", type:"italian", location: "East Burnside", price:"Very Expensive"},
    {name: "Burger Hell", type: "Fastfood", location: "Downtown", price:"Free"}
  ];

  $scope.addRestaraunt = function() {
    $scope.restaraunts.push({ name: $scope.restarauntName, type: $scope.restarauntType, location: $scope.restarauntLocation, price: $scope.restarauntPrice });
    $scope.restarauntName = null;
    $scope.restarauntType = null;
    $scope.restarauntLocation = null;
    $scope.restarauntPrice = null;
  };

  $scope.deleteRestaraunt = function(restaraunt) {
    var index = $scope.restaraunts.indexOf(restaraunt);
    $scope.restaraunts.splice(index, 1);
  }

});
