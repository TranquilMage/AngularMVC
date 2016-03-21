productModule.controller("productListViewModel", function ($scope, productService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;
    $scope.productService = productService;

    var initialize = function () {
        $scope.refreshProducts();
    }

    $scope.refreshProducts = function () {
        viewModelHelper.apiGet('api/products', null,
            function (result) {
                $scope.products = result.data;
            });
    }

    $scope.showProduct = function (product) {
        $scope.flags.shownFromList = true;
        viewModelHelper.navigateTo('product/show/' + product.ProductId);
    }

    initialize();
});
