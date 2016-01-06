'use strict';

angular.module('app.Controllers', []);
angular.module('app', ['app.Controllers',
					   'ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'app/controllers/main/main.html',
			controller: 'MainCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	});

