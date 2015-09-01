/* main directive */
angular.module('app')
    .directive('mainDirective', mainDirective);

function mainDirective() {
    return {
        restrict: 'E',
        scope: {
            param0 : '@param0',
            param1 : '@param1',
            param2 : '@param2'
        },
        bindToController: true,
        controller: 'mainCtrl',
        controllerAs: 'main',
        templateUrl: './public/app/views/partials/mainPartial.html'
    };
};
/* end of file */