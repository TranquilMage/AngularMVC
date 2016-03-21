customerModule.controller("rootViewModel",
    function ($scope, customerService, $http, viewModelHelper) {

    // This is the parent controller/viewmodel for 'customerModule' and its $scope is accesible
    // down controllers set by the routing engine. This controller is bound to the Customer.cshtml in the
    // Home view-folder.

    $scope.viewModelHelper = viewModelHelper;
    $scope.customerService = customerService;

    $scope.flags = { shownFromList: false };

    var initialize = function () {
        $scope.pageHeading = "Customer Section";
    }

    $scope.customerList = function () {
        viewModelHelper.navigateTo('customer/list');
    }

    $scope.showCustomer = function () {
        if (customerService.customerId != 0) {
            $scope.flags.shownFromList = false;
            viewModelHelper.navigateTo(
                'customer/show/' + customerService.customerId);
        }
    }

    initialize();
});
