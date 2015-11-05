(function () {

    var appModule = angular.module('twebDemoApp', []);


    appModule.controller('PageController', function ($scope) {
        $scope.counter = 1;
        $scope.title = "HEIG-VD rocks.";

        $scope.changeTitle = function () {
            $scope.title =  "HEIG-VD really rocks! (" + $scope.counter++ + ")";
        };

    });

    /**
     * The BeersController depends on other services: $scope, beersService (our own service) and
     * $http (provided by AngularJS)
     */
    appModule.controller('BeersController', function ($scope, beerService, $http) {
        $scope.beers = beerService.beers;
        $scope.randomBeer = {title: "Loading..."};

        $http({
            method: 'jsonp',
            url: 'http://prost.herokuapp.com/api/v1/brewery/rand?callback=JSON_CALLBACK'
        }).then(function successCallback(response) {
            $scope.randomBeer = response.data;
        }, function errorCallback(response) {
        });
    });


    /**
     * factory is one way to create a service. In this case, we don't have any dependency
     * on other services
     */
    appModule.factory('beerService', function () {
        var beers = ["heineken", "cardinal", "guiness"];
        return {
            beers: beers
        }
    });

    appModule.controller('FormController', function ($scope) {
        $scope.getTime = function() {
            return new Date();
        }
    });


    })();

