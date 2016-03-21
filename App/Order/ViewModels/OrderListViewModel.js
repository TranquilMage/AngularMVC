orderModule.controller("orderListViewModel", function ($scope, orderService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;
    $scope.orderService = orderService;

    var initialize = function () {
        $scope.refreshOrders();
    }

    $scope.refreshOrders = function () {
        viewModelHelper.apiGet('api/orders', null,
            function (result) {
                $scope.orders = result.data;
            });
    }

    $scope.showOrder = function (order) {
        $scope.flags.shownFromList = true;
        viewModelHelper.navigateTo('order/show/' + order.OrderId);
    }

    initialize();
});
