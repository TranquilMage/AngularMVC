customerModule.controller("customerViewModel", function ($scope, customerService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;
    $scope.customerService = customerService;

    var initialize = function () {
        $scope.refreshCustomer($routeParams.customerId);
    }

    $scope.refreshCustomer = function (customerId) {
        viewModelHelper.apiGet('api/customer/' + customerId, null,
            function (result) {
                customerService.customerId = customerId;
                $scope.customer = result.data;
            });
    }

    initialize();
});
