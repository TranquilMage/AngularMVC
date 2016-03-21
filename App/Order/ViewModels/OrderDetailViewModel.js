orderModule.controller("orderDetailViewModel", function ($scope, orderService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;
    $scope.orderService = orderService;

    var initialize = function () {
        loadOrderDetail($routeParams.orderId, $routeParams.orderDetailId);
    }

    var loadOrderDetail = function (orderId, orderDetailId) {
        viewModelHelper.apiGet('api/order/detail/' + orderId + '/' + orderDetailId, null,
            function (result) {
                $scope.orderDetail = result.data;
            });
    }

    initialize();
});
