'Use Strict';
angular.module('starter.controllers', [])

.controller('loginController', function ($scope, $state, $localStorage, $location,$http ) {
 /* var ref = new Firebase(FURL);
  var userkey = "";
  $scope.signIn = function (user) {
    console.log("sending login request");
    if(angular.isDefined(user)){
    Auth.login(user)
      .then(function(authData) {
      //console.log("id del usuario:" + JSON.stringify(authData));

      ref.child('profile').orderByChild("id").equalTo(authData.uid).on("child_added", function(snapshot) {
        console.log(snapshot.key());
        userkey = snapshot.key();
        var obj = $firebaseObject(ref.child('profile').child(userkey));

        obj.$loaded()
          .then(function(data) {
            //console.log(data === obj); // true
            //console.log(obj.email);
            $localStorage.email = obj.email;
            $localStorage.userkey = userkey;

  
              $state.go('home');
              console.log("Starter page","Home");

          })
          .catch(function(error) {
            console.error("Error:", error);
          });
      });

      }, function(err) {
        Utils.hide();
         Utils.errMessage(err);
      });
    }
  };
  

*/

});
