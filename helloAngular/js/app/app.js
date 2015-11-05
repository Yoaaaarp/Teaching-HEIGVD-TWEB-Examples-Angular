(function () {

    var appModule = angular.module('twebDemoApp', []);


    appModule.controller('PageController', function ($scope) {
        $scope.counter = 1;
        $scope.title = "HEIG-VD rocks.";

        $scope.changeTitle = function () {
            $scope.title =  "HEIG-VD really rocks! (" + $scope.counter++ + ")";
        };

    });

    appModule.controller('BeersController', function ($scope, beerService, $http, $interval) {
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

