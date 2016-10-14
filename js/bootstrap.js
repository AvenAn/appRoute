require.config({
    baseUrl: './js',
    paths: {
        'angular': 'assets/angular/angular.min',
        'jquery': 'https://cdn.bootcss.com/jquery/3.1.1/jquery',
        'angular-ui-router': 'assets/angular-ui-router/release/angular-ui-router.min',
        'angular-async-loader': 'assets/angular-async-loader/angular-async-loader.min',
        'angular-ui-mask': 'assets/angular-ui-mask/dist/mask.min',
        'ng-tags-input': 'assets/ng-tags-input/build/ng-tags-input.min',
        'ng-file-upload': 'assets/ng-file-upload/dist/ng-file-upload-all.min'
    },
    shim: {
        'angular': { exports: 'angular' },
        'jquery': { exports: '$' },
        'angular-ui-router': { deps: ['angular'] }
    }
});

//定义加载模块
var APP = {};
//module 对应的路径名
APP.load = function(module) {
    require(['angular', module], function(angular) {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['app']);
            angular.element(document).find('html').addClass('ng-app');
        });
    });
}



// require(['angular', './app-routes'], function(angular) {
//     angular.element(document).ready(function() {
//         angular.bootstrap(document, ['app']);
//         angular.element(document).find('html').addClass('ng-app');
//     });
// });
