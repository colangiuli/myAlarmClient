angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $firebaseObject) {
  var ref_sensor_data = new Firebase("https://blistering-torch-2339.firebaseio.com/sensor_data");
  // download the data into a local object
  var sensor_dataSyncObject = $firebaseObject(ref_sensor_data);
  // synchronize the object with a three-way data binding
  sensor_dataSyncObject.$bindTo($scope, "sensor_data");

  var ref = new Firebase("https://blistering-torch-2339.firebaseio.com/armed");
  ref.authWithPassword({
    email    : "dreammaster83@gmail.com",
    password : "Firebasepswd!2016"
  }, function(error, authData) {
    if (error) {
      alert("Login Failed! " + error);
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  syncObject.$bindTo($scope, "armed");



})

.controller('LogsCtrl', function($scope, $firebaseObject) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  var ref_logs= new Firebase("https://blistering-torch-2339.firebaseio.com/event_log");
  // download the data into a local object
  var ref_logsSyncObject = $firebaseObject(ref_logs);
  // synchronize the object with a three-way data binding
  ref_logsSyncObject.$bindTo($scope, "logs");

 // $scope.logs = Chats.all();
  $scope.remove = function(log) {
    Logs.remove(log);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
