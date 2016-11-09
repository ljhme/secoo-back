var updateUserCtrl = angular.module('myApp');

updateUserCtrl.controller('updateUserInfoCtrl',['$scope','$routeParams',function($scope,$routeParams){

	console.log($routeParams.userIDS);

	$scope.userObjInfo = {
		'name':'',
		'ethnic':'',
		'schooling':'',
		'birth':'',
		'id':'',
		'tel':'',
		'inductionTime':'',
		'department':'',
		'weixin':'',
		'position':'',
		'jobTitles':'',
		'email':'',
		'address':''
	}

	$scope.errorMes = '';
	$scope.addModal = '';

	$scope.userObjInfo = JSON.parse(webStorageUtil.setAndGetStorage($routeParams.userIDS,'local'));
	console.log(typeof($scope.userObjInfo));

	$scope.updateUser = function () {
		if(!$scope.userObjInfo.name){
			$scope.errorMes = '姓名不能为空';
		}else if(!$scope.userObjInfo.ethnic){
			$scope.errorMes = '名族不能为空';
		}else if(!$scope.userObjInfo.birth){
			$scope.errorMes = '出生年月不能为空';
		}else if(!$scope.userObjInfo.tel){
			$scope.errorMes = '电话不能为空';
		}else if(!$scope.userObjInfo.department){
			$scope.errorMes = '部门不能为空';
		}else{
			webStorageUtil.setAndGetStorage($scope.userObjInfo.id,$scope.userObjInfo,'local');
			// console.log($scope.userObjInfo);
			$scope.addModal = 'modal';
		}
	}
}])