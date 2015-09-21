restarauntSearch.controller('RestarauntsCtrl', function RestarauntsCtrl($scope) {
  $scope.restaraunts = [
    {name: "Pizza Heaven", location: "East Burnside", price:"Very Expensive"}
  ];

  $scope.addRestaraunt = function() {
    $scope.restaraunts.push({ name: $scope.restarauntName, location: $scope.restarauntLocation, price: $scope.restarauntPrice });
    $scope.restarauntName = null;
    $scope.restarauntLocation = null;
    $scope.restarauntPrice = null;
  };

  $scope.deleteRestaraunt = function(restaraunt) {
    var index = $scope.restaraunts.indexOf(restaraunt);
    $scope.restaraunts.splice(index, 1);
  }

});
