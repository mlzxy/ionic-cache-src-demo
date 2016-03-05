app.controller('rootCtrl',function($scope,$log, cacheSrcStorage){
    var log = function(x){
        $log.info(x);
    };

    console.log(cacheSrcStorage.get("http://farm4.static.flickr.com/3131/2877192571_3eb8bcf431.jpg"));
   
    $scope.onFinishLocal = function(){
        log('Local Finished');  
    };

    // Won't get called
    $scope.onStartLocal = function(){
        log('Local Started');
    };
    // Won't get called
    $scope.onProgressLocal = function(x){
        log('Local Progress With:' + x + '%');
    };
    
    

    $scope.onStartRemoteFirst = function(){
        log('First Remote Started');
    };
    $scope.onFinishRemoteFirst = function(){
        log('First Remote Finished');
    };
    $scope.onProgressRemoteFirst = function(x){
        log('First Remote Progress With:' + x + '%');
    };


    $scope.onStartRemoteSecond = function(){
        log('Second Remote Started');
    };
    $scope.onFinishRemoteSecond = function(){
        log('Second Remote Finished');
    };
    $scope.onProgressRemoteSecond = function(x){
        log('Second Remote Progress With:' + x + '%');
    };    
});
