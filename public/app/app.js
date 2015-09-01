/* application */
angular.module('app',['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	   	
	   	$locationProvider.hashPrefix('!').html5Mode({
		   	enabled: true,
		  	requireBase: false
		});

	   $routeProvider
	       // main page
	       .when('/', {
	           templateUrl: 'public/app/views/main.html'
	       })
	       .otherwise({ redirectTo : '/' });
}]);
/* end of file */
