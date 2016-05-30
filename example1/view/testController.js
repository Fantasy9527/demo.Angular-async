define(['app'], function(app) {
    app.controller('testController', ['$scope', function($scope) {
        $scope.message='我是testController,已经成功加载运行';
    }])
})
