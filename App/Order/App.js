
var orderModule = angular.module('order', ['common'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/order', { templateUrl: '/App/Order/Views/OrderHomeView.html', controller: 'orderHomeViewModel' });
        $routeProvider.when('/order/list', { templateUrl: '/App/Order/Views/OrderListView.html', controller: 'orderListViewModel' });
        $routeProvider.when('/order/show/:orderId', { templateUrl: '/App/Order/Views/OrderView.html', controller: 'orderViewModel' });
        $routeProvider.when('/order/detail/:orderId/:orderDetailId', { templateUrl: '/App/Order/Views/OrderDetailView.html', controller: 'orderDetailViewModel' });
        $routeProvider.otherwise({ redirectTo: '/order' });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });

orderModule.factory('orderService', function ($rootScope, $http, $q, $location, viewModelHelper) { return MyApp.orderService($rootScope, $http, $q, $location, viewModelHelper); });

(function (myApp) {
    var orderService = function ($rootScope, $http, $q, $location, viewModelHelper) {

        var self = this;

        self.orderId = 0;

        return this;
    };
    myApp.orderService = orderService;
}(window.MyApp));
