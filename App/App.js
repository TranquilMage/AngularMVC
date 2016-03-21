var commonModule = angular.module('common', ['ngRoute']);
var mainModule = angular.module('main', ['common']);

commonModule.factory('viewModelHelper',
    function ($http, $q, $window, $location) {
        return MyApp.viewModelHelper(
            $http, $q, $window, $location);
    });

commonModule.factory('validator', function () { return valJs.validator(); });

mainModule.controller("indexViewModel", function (
    $scope, $http, $q, $routeParams, $window,
    $location, viewModelHelper) {

    var self = this;

    $scope.topic =
        "ASP.NET MVC and AngularJS";
    $scope.author = "Obstolum Triggs";
});

(function (myApp) {
    var viewModelHelper = function (
        $http, $q, $window, $location) {

        var self = this;

        self.modelIsValid = true;
        self.modelErrors = [];

        self.resetModelErrors = function () {
            self.modelErrors = [];
            self.modelIsValid = true;
        }

        self.apiGet = function (uri, data, success, failure, always) {
            self.modelIsValid = true;
            $http.get(MyApp.rootPath + uri, data)
                .then(function (result) {
                    success(result);
                    if (always != null)
                        always();
                }, function (result) {
                    if (failure != null) {
                        failure(result);
                    }
                    else {
                        var errorMessage = result.status + ':' + result.statusText;
                        if (result.data != null) {
                            if (result.data.Message != null)
                                errorMessage += ' - ' + result.data.Message;
                            if (result.data.ExceptionMessage != null)
                                errorMessage += ' - ' + result.data.ExceptionMessage;
                        }
                        self.modelErrors = [errorMessage];
                        self.modelIsValid = false;
                    }
                    if (always != null)
                        always();
                });
        }

        self.apiPost = function (uri, data, success, failure, always) {
            self.modelIsValid = true;
            $http.post(MyApp.rootPath + uri, data)
                .then(function (result) {
                    success(result);
                    if (always != null)
                        always();
                }, function (result) {
                    if (failure != null) {
                        failure(result);
                    }
                    else {
                        var errorMessage = result.status + ':' + result.statusText;
                        if (result.data != null) {
                            if (result.data.Message != null)
                                errorMessage += ' - ' + result.data.Message;
                            if (result.data.ExceptionMessage != null)
                                errorMessage += ' - ' + result.data.ExceptionMessage;
                        }
                    }
                    if (always != null)
                        always();
                });
        }

        self.goBack = function () {
            $window.history.back();
        }

        self.navigateTo = function (path, params) {
            if (params == null)
                $location.path(MyApp.rootPath + path);
            else
                $location.path(MyApp.rootPath + path).search(params);
        }

        self.refreshPage = function (path) {
            $window.location.href = MyApp.rootPath + path;
        }

        self.clone = function (obj) {
            return JSON.parse(JSON.stringify(obj))
        }

        self.querystring = function (param) {
            if ($location.search != null)
                return $location.search()[param];
            else
                return null;
        }

        self.resetQueryParams = function () {
            $location.url($location.path());
        }

        return this;
    };
    myApp.viewModelHelper = viewModelHelper;
}(window.MyApp));
