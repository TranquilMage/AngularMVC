customerModule.controller("customerHomeViewModel",
    function ($scope, customerService, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;
    $scope.customerService = customerService;


    var initialize = function () {

    }

    initialize();
});
