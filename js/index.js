define(function(require) {
    var app = require('./app');
    console.log('app', app)
    app.run(['$state', '$stateParams', '$rootScope', function($state, $stateParams, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);

    // app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    //     $urlRouterProvider.otherwise('/home');

    //     $stateProvider
    //         .state('home', {
    //             url: '/home',
    //             templateUrl: 'home/home.html',
    //              // new attribute for ajax load controller
    //             controllerUrl: 'home/homeCtrl',
    //             controller: 'homeCtrl'
    //         })
    //         .state('users', {
    //             url: '/users',
    //             templateUrl: 'users/users.html',
    //              // new attribute for ajax load controller
    //             controllerUrl: 'users/usersCtrl',
    //             controller: 'usersCtrl',
    //             // load more controllers, services, filters, ...
    //             dependencies: ['services/usersService']
    //         })
    //         .state('components', {
    //             url: '/components',
    //             templateUrl: 'components/components.html',
    //              // new attribute for ajax load controller
    //             controllerUrl: 'components/componentsCtrl',
    //             controller: 'componentsCtrl'
    //         });
    // }]);
    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index'); //找到相应路由调到制定的路由页面
        $stateProvider
            .state('index', { //首页
                url: '/index?a&page&size',
                views: {
                    '': { //首先渲染partial/index.html 模板页面
                        templateUrl: 'partial/index.html',
                        controllerUrl: 'index/navCtrl',
                        controller: 'navController'
                    },
                    'topbar@index': { //topbar@index 表示渲染index.html 中相应的 ui-view="topbar"
                        templateUrl: 'partial/topbar.html'
                    },
                    'main@index': { //同上
                        templateUrl: 'partial/home.html',
                        controllerUrl: 'index/homeCtrl',
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
});
