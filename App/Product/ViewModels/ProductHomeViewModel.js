productModule.controller("productHomeViewModel", function ($scope, productService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;
    $scope.productService = productService;


    var initialize = function () {

    }

    initialize();
});
