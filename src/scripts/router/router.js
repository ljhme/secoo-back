var myApp = angular.module('myApp',['ngRoute']);
myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/addUesr',{
		templateUrl:'/src/scripts/templates/routeTpls/addUser.html',
		controller:'addUserCtrl'
	})
	.when('/userList',{
		templateUrl:'/src/scripts/templates/routeTpls/userList.html',
		controller:'userListCtrl'
	})
	.when('/updateUserInfo/:userIDS',{
		templateUrl:'/src/scripts/templates/routeTpls/updateUserInfo.html',
		controller:'updateUserInfoCtrl'
	})
	.otherwise({
      redirectTo: '/addUesr'
    })
}]);

