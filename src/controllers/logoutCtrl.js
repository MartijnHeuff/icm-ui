icm.controller('LogoutCtrl', ['$scope', '$location', 'Core', 'Utils', function ($scope, $location, Core, Utils) {
    $scope.data = Utils;

    $scope.logout = function () {
        Core.peer().data('activeproject', ' ').sync();
        $scope.data.user = '';
        Core.user('');
        $location.path('/login');
    }
}]);
