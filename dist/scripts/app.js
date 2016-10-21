(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
            
            .state('room', {
                url: '/room',
                controller: 'RoomCtrl as room',
                templateUrl: '/templates/room.html'
            });
       
    }

    var app = angular.module("bloc-chat", ["firebase"]);

    app.controller("bloc-chat", function($scope, $firebaseObject) {
        var ref = firebase.database().ref();
        // download the data into a local object
        $scope.data = $firebaseObject(ref);
    });

    angular
        .module('bloc-chat', ['ui.router', "firebase", "ui.bootstrap"]) 
        .config(config);
})();
