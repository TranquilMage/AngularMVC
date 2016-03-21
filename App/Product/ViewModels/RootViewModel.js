productModule.controller("rootViewModel", function ($scope, productService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

    // This is the parent controller/viewmodel for 'productModule' and its $scope is accesible
    // down controllers set by the routing engine. This controller is bound to the Product.cshtml in the
    // Home view-folder.

    $scope.viewModelHelper = viewModelHelper;
    $scope.productService = productService;

    $scope.flags = { shownFromList: false };

    var initialize = function () {
        $scope.pageHeading = "Product Section";
    }

    $scope.productList = function () {
        viewModelHelper.navigateTo('product/list');
    }

    $scope.showProduct = function () {
        if (productService.productId != 0) {
            $scope.flags.shownFromList = false;
            viewModelHelper.navigateTo('product/show/' + productService.productId);
        }
    }

    initialize();
});
