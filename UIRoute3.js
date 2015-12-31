var routerApp = angular.module('routerApp', ['ui.router']); //引入相应模块
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index'); //找到相应路由调到制定的路由页面
    $stateProvider
        .state('index', {  //首页
            url: '/index',
            views: {
                '': { //首先渲染tpls3/index.html 模板页面
                    templateUrl: 'tpls3/index.html'
                },
                'topbar@index': { //topbar@index 表示渲染index.html 中相应的 ui-view="topbar"
                    templateUrl: 'tpls3/topbar.html'
                },
                'main@index': { //同上
                    templateUrl: 'tpls3/home.html',
                    controller: 'homeController'  //定义首页控制器
                }
            }
        })
        .state('index.usermng', {
            url: '/usermng',
            views: {
                'main@index': {
                    templateUrl: 'tpls3/usermng.html',
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
            templateUrl: 'tpls3/highendusers.html'
        })
        .state('index.usermng.normalusers', {
            url: '/normalusers',
            templateUrl: 'tpls3/normalusers.html'
        })
        .state('index.usermng.lowusers', {
            url: '/lowusers',
            templateUrl: 'tpls3/lowusers.html'
        })
        .state('index.usermng.addusertype', {
            url: '/addusertype',
            templateUrl: 'tpls3/addusertypeform.html',
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
                    templateUrl: 'tpls3/report.html'
                }
            }
        })
        .state('settings', {
            url: '/settings',
            views: {
                // absolutely targets the unnamed view in root unnamed state.
                // <div ui-view/> within index.html
                '@': {
                   templateUrl: 'tpls3/settings.html',
                }
            }
        })
});

//homeController
routerApp.controller('homeController',function($scope) {
    $scope.home = '欢迎来到首页'
})
