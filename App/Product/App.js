
var productModule = angular.module('product', ['common'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/product', { templateUrl: '/App/Product/Views/ProductHomeView.html', controller: 'productHomeViewModel' });
        $routeProvider.when('/product/list', { templateUrl: '/App/Product/Views/ProductListView.html', controller: 'productListViewModel' });
        $routeProvider.when('/product/show/:productId', { templateUrl: '/App/Product/Views/ProductView.html', controller: 'productViewModel' });
        $routeProvider.otherwise({ redirectTo: '/product' });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });

productModule.factory('productService', function ($rootScope, $http, $q, $location, viewModelHelper) { return MyApp.productService($rootScope, $http, $q, $location, viewModelHelper); });

(function (myApp) {
    var productService = function ($rootScope, $http, $q, $location, viewModelHelper) {

        var self = this;

        self.productId = 0;

        return this;
    };
    myApp.productService = productService;
}(window.MyApp));
