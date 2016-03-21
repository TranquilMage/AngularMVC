
var customerModule = angular.module('customer', ['common']);

customerModule.config(function ($routeProvider,
                                $locationProvider) {
    $routeProvider.when('/customer', {
        templateUrl: '/App/Customer/Views/CustomerHomeView.html',
        controller: 'customerHomeViewModel'
    });
    $routeProvider.when('/customer/list', {
        templateUrl: '/App/Customer/Views/CustomerListView.html',
        controller: 'customerListViewModel'
    });
    $routeProvider.when('/customer/show/:customerId', {
        templateUrl: '/App/Customer/Views/CustomerView.html',
        controller: 'customerViewModel'
    });
    $routeProvider.otherwise({
        redirectTo: '/customer'
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

customerModule.factory('customerService',
    function ($http, $location, viewModelHelper) {
        return MyApp.customerService($http,
            $location, viewModelHelper);
    });

(function (myApp) {
    var customerService = function ($http, $location,
        viewModelHelper) {

        var self = this;

        self.customerId = 0;

        return this;
    };
    myApp.customerService = customerService;
}(window.MyApp));
