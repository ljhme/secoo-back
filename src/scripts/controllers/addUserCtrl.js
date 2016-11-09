var addUserCtrl = angular.module('myApp');
addUserCtrl.controller('addUserCtrl',['$scope',function($scope){
	$scope.oldId = 201601;
	var getOldId = parseInt(webStorageUtil.setAndGetStorage('oldId','local'));
	getOldId += 1;
	if(getOldId){
		$scope.oldId = getOldId;
	}else{
		$scope.oldId = $scope.oldId;
	}
	$scope.userObj = {
		'name':'',
		'ethnic':'',
		'schooling':'',
		'birth':'',
		'id':$scope.oldId,
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

	$scope.addUser = function(){
		if(!$scope.userObj.name){
			$scope.errorMes = '姓名不能为空';
		}else if(!$scope.userObj.ethnic){
			$scope.errorMes = '名族不能为空';
		}else if(!$scope.userObj.birth){
			$scope.errorMes = '出生年月不能为空';
		}else if(!$scope.userObj.tel){
			$scope.errorMes = '电话不能为空';
		}else if(!$scope.userObj.department){
			$scope.errorMes = '部门不能为空';
		}else{
			webStorageUtil.setAndGetStorage($scope.userObj.id,$scope.userObj,'local');
			
			webStorageUtil.setAndGetStorage('oldId',$scope.oldId,'local');	
			$scope.addModal = 'modal';
		}
	}
	$scope.addSuccess = function(){
		window.location.reload();
	}
	$scope.addUserCancel = function(){
		$scope.userObj = {
		'name':'',
		'ethnic':'',
		'schooling':'',
		'birth':'',
		'id':$scope.oldId,
		'tel':'',
		'inductionTime':'',
		'department':'',
		'weixin':'',
		'position':'',
		'jobTitles':'',
		'email':'',
		'address':''
		};
		$scope.errorMes = '';
	}

}])