var navApp = angular.module('myApp');
navApp.directive('linkNav',function(){
	return {
		restrict:'E',
		templateUrl:'/src/scripts/templates/directiveTpls/linkNav.html',
		controller:['$scope',function($scope){}],
		link:function(scope,element,attrs,controller){}
	}
});