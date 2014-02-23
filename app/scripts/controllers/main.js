'use strict';

angular.module('socialAeeApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope, $location) {

        $scope.pueblo = null;

        $scope.pueblos = [ {name: 'Pueblo', incidents: 'Total'} ];

        var load = function (pueblos) {
            $http({method: 'GET', url: 'http://localhost:8002/getBreakdownsSummary/'})
                .success(function(data) {
                    if (angular.isObject(data)) {
                        var objects = data.return;
                        for (var i = 0; i < objects.length; i++) {
                            var obj = {name: objects[i].r1TownOrCity, incidents: objects[i].r2TotalBreakdowns};
                            pueblos.push(obj);
                        }
                    }
                });
        };

        load($scope.pueblos);

        $scope.stats = null;
        $scope.dataObj = null;

        $scope.doStuff = function(data) {
            $scope.dataObj = data != null ? angular.fromJson(data) : null;
            var incidents = angular.isObject($scope.dataObj) && angular.isObject($scope.dataObj.return) ? $scope.dataObj.return.length : 0;
            $scope.stats = {
                name: $scope.pueblo.name,
                incidents: incidents
            };
        };

        $scope.$watch('pueblo', function(newVal, oldVal) {
            if (!angular.isObject($scope.pueblo)) {
                return;
            }
            $http({method: 'GET', url: 'http://localhost:8002/getBreakdownsByTownOrCity/' + $scope.pueblo.name + "/ "})
                .success(function(data, status, headers, config) {
                    $scope.doStuff(data);
                });
        });

        $scope.goToDetail = function(incident) {
            $rootScope.incident = incident;
            $location.path('/detail');
        }
  });
