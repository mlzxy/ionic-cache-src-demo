// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-cache-src'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('tabs', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
        })
        .state('tabs.common', {
            url: "/home",
            views: {
                'common-tab': {
                    templateUrl: "templates/common.html"
                }
            }
        })

    .state('tabs.ngRepeat', {
        url: "/ngRepeat",
        views: {
            'ngRepeat-tab': {
                templateUrl: "templates/ngRepeat.html"
            }
        }
    })

    .state('tabs.collectionRepeat', {
        url: "/collectionRepeat",
        views: {
            'collectionRepeat-tab': {
                templateUrl: "templates/collectionRepeat.html"
            }
        }
    })

        .state('tabs.video', {
            url: "/video",
            views: {
                'video-tab': {
                    templateUrl: "templates/video.html"
                }
            }
        });
    

    $urlRouterProvider.otherwise("/tab/common");

});
