define(['require', 'jquery'], function(require, $) {
    var app = require('../app');

    app.controller('homeController', ['$scope', function($scope) {
        // $scope.name = 'Home';
        $scope.home = '这是首页homeController'
    }]);

    //directive
    app.directive('myButton', function() {
        return {
            link: function(scope, element, attribute) {
                console.log('这里是自定义指令，用jquery写的代码，并且改变字体颜色')
                $(element).css({
                    color: 'red'
                })
            }
        }
    })


});
