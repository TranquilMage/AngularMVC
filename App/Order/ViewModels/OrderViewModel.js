orderModule.controller("orderViewModel", function ($scope, orderService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;
    $scope.orderService = orderService;

    var initialize = function () {
        $scope.refreshOrder($routeParams.orderId);
    }

    $scope.refreshOrder = function (orderId) {
        viewModelHelper.apiGet('api/order/' + orderId, null,
            function (result) {
                orderService.orderId = orderId;
                $scope.order = result.data;
            });
    }

    $scope.showOrderDetail = function (orderId, orderDetail) {
        viewModelHelper.navigateTo('order/detail/' + orderId + '/' + orderDetail.OrderDetailId);
    }

    initialize();
});
