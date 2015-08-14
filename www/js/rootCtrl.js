app.controller('rootCtrl',function($scope,$log){
    var log = function(x){
        // if(window.cordova)
        //     alert(x);
        $log.info(x);
    };

   
    $scope.onFinishLocal = function(){
        log('Local Finished');  
    };

   
    $scope.onProgressLocal = function(x){
        log('Local Progress With:' + x + '%');
    };
    $scope.onFinishRemoteFirst = function(){
        log('First Remote Finished');
    };
    $scope.onProgressRemoteFirst = function(x){
        log('First Remote Progress With:' + x + '%');
    };

    $scope.onFinishRemoteSecond = function(){
        log('Second Remote Finished');
    };
    $scope.onProgressRemoteSecond = function(x){
        log('Second Remote Progress With:' + x + '%');
    };    
});
