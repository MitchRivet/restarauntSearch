restarauntSearch.controller('RestarauntsCtrl', ['$scope', '$filter', function RestarauntsCtrl($scope, $filter) {

  var orderBy = $filter('orderBy');

  $scope.restaraunts = [
    {name: "Pizza Heaven", type:"italian", location: "East Burnside", price: 5},
    {name: "Burger Hell", type: "Fastfood", location: "Downtown", price: 1}
  ];

      $scope.order = function(predicate, reverse) {
        $scope.restaraunts = orderBy($scope.restaraunts, predicate, reverse);
      };

  $scope.order('-name', false);

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
  };

}]);
