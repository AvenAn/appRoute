define(function(require) {

    var app = require('../app');

    app.controller('navController', ['$scope', function($scope) {
        // $scope.name = 'Home';
        $scope.home = '这是首页navController'
    }]);
});
