productModule.controller("productViewModel", function ($scope, productService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;
    $scope.productService = productService;

    var initialize = function () {
        $scope.refreshProduct($routeParams.productId);
    }

    $scope.refreshProduct = function (productId) {
        viewModelHelper.apiGet('api/product/' + productId, null,
            function (result) {
                productService.productId = productId;
                $scope.product = result.data;
            });
    }

    initialize();
});
