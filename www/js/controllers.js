angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $firebaseObject, $rootScope, $state) {
  if (!!!$rootScope.authData){
      $state.go('login');
      console.log("no auth, redirecting to login!!");
  }else{
      // download the data into a local object
      var sensor_dataSyncObject = $firebaseObject($rootScope.ref.child('sensor_data'));
      // synchronize the object with a three-way data binding
      sensor_dataSyncObject.$bindTo($scope, "sensor_data");

      // download the data into a local object
      var syncObject = $firebaseObject($rootScope.ref.child('armed'));
      // synchronize the object with a three-way data binding
      syncObject.$bindTo($scope, "armed");
  }


})

.controller('LogsCtrl', function($scope, $firebaseObject, $rootScope, $state) {
  if (!!!$rootScope.authData){
      $state.go('login');
      console.log("no auth, redirecting to login!!");
  }else{
      var ref_logsSyncObject = $firebaseObject($rootScope.ref.child('event_log'));
      // synchronize the object with a three-way data binding
      ref_logsSyncObject.$bindTo($scope, "logs");

     // $scope.logs = Chats.all();
      $scope.remove = function(log) {
        Logs.remove(log);
      };
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $rootScope, $state) {
  if (!!!$rootScope.authData){
      $state.go('login');
      console.log("no auth, redirecting to login!!");
  }else{
    $scope.settings = {
      enableFriends: true
    };
  }
})

.controller('loginController', function ($scope, $state, $rootScope, $firebaseAuth /*, $localStorage, $location,$http*/ ) {
  $rootScope.ref = new Firebase("https://blistering-torch-2339.firebaseio.com");
  /*$rootScope.auth = $firebaseAuth($rootScope.ref);
      // any time auth status updates, add the user data to scope
  $rootScope.auth.$onAuth(function(authData) {
      $rootScope.authData = authData;
      console.log("Authenticated successfully with payload:", authData);
      //alert("autenticato con successo!");
      $state.go('tab.dash');
      console.log("Starter page","tab");
  });*/


   $scope.signIn = function (user) {
    $rootScope.ref.authWithPassword({
    email    : "dreammaster83@gmail.com",
    password : "Firebasepswd!2016"
  }, function(error, authData) {
    if (error) {
      //alert("Login Failed! " + error);
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      //alert("autenticato con successo!");
      $state.go('tab.dash');
      console.log("Starter page","tab");
      $rootScope.authData = authData;
    }
  });

   }
})
.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      if ((item != null) && (typeof(item) == "object")){
        filtered.push(item);
      }
    });
    console.log(filtered);
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
});
