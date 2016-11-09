var userListCtrl = angular.module('myApp');
userListCtrl.controller('userListCtrl',['$scope',function($scope){
	$scope.userInfoTitle = ['姓名','名族','学历','出生年月','员工编号','手机','入职时间',
	'所属部门','微信','职位','职业等级','邮箱','地址','操作'];
	$scope.allUserInfo = webStorageUtil.setAndGetStorage('local');
	// console.log($scope.allUserInfo);
	$scope.userIDs = '';
	$scope.userIndex = '';
	$scope.deleteUser = function(userID,index){
		// console.log(userID);
		$scope.userIDs = userID;
		$scope.userIndex = index;
	}
	$scope.ackDelete = function(){
		webStorageUtil.removeAndClearStorage($scope.userIDs,'local');
		var localindex = webStorageUtil.setAndGetStorage('localIndex','local').split(',');
		var newLocalIndex = localindex.splice($scope.userIndex, 1);  //删除点击删除的用户
		window.localStorage.setItem('localIndex',localindex);  //删除后重新设置localindex
		if(localindex.length>=1){
			$scope.allUserInfo = webStorageUtil.setAndGetStorage('local');
		}
	}


}])