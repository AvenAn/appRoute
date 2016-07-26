var app = angular.module('routerApp', ['ui.router']); //引入相应模块
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index'); //找到相应路由调到制定的路由页面
    $stateProvider
        .state('index', { //首页
            url: '/index?a&page&size',
            views: {
                '': { //首先渲染partial/index.html 模板页面
                    templateUrl: 'partial/index.html'
                },
                'topbar@index': { //topbar@index 表示渲染index.html 中相应的 ui-view="topbar"
                    templateUrl: 'partial/topbar.html'
                },
                'main@index': { //同上
                    templateUrl: 'partial/home.html',
                    controller: 'homeController' //定义首页控制器
                }
            }
        })
        .state('index.usermng', {
            url: '/usermng',
            views: {
                'main@index': {
                    templateUrl: 'partial/usermng.html',
                    controller: function($scope, $state) {
                        $scope.addUserType = function() {
                            $state.go("index.usermng.addusertype");
                        }
                    }
                }
            }
        })
        .state('index.usermng.highendusers', {
            url: '/highendusers',
            templateUrl: 'partial/highendusers.html'
        })
        .state('index.usermng.normalusers', {
            url: '/normalusers',
            templateUrl: 'partial/normalusers.html'
        })
        .state('index.usermng.lowusers', {
            url: '/lowusers',
            templateUrl: 'partial/lowusers.html'
        })
        .state('index.usermng.addusertype', {
            url: '/addusertype',
            templateUrl: 'partial/addusertypeform.html',
            controller: function($scope, $state) {
                //返回上一级
                $scope.backToPrevious = function() {
                    window.history.back();
                }
            }
        })
        .state('index.permission', {
            url: '/permission',
            views: {
                'main@index': {
                    template: 'permission'
                }
            }
        })
        .state('index.report', {
            url: '/report',
            views: {
                'main@index': {
                    templateUrl: 'partial/report.html'
                }
            }
        })
        .state('settings', {
            url: '/settings',
            views: {
                // absolutely targets the unnamed view in root unnamed state.
                // <div ui-view/> within index.html
                '@': {
                    templateUrl: 'partial/settings.html',
                }
            }
        })
});

//homeController
app.controller('homeController', function($http, $location, $q, $rootScope, $scope, $state, $stateParams, $window, $timeout) {

    // toolbar
    $scope.toolbar = '/appRoute/partial/toolbar.html'
    $scope.home = '欢迎来到首页'
    console.log($stateParams)
    $scope.click = function(reg) {
        $http.post('/api/test/test1', {
            x: 1,
            y: 2,
            z: reg
        }).success(function(response) {
            console.log('response', response)
        })
    }
})

//directive
app.directive('myButton', function() {
    return {
        link: function(scope, element, attribute) {
            console.log('我是自定义指令，在这里写代码')
        }
    }
})

angular.bootstrap(document, ['routerApp']);
