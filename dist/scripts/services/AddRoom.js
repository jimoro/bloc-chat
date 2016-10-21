/*
(function() {
    function AddRoom() {

        //just make a variable to keep track of the data coming from Firebase
        var data =[];
      
        //create a new connection to firebase
        var ref = new Firebase('https://chit-85049.firebaseio.com/rooms');
        
        //listen to data updates from firebase
        ref.on("value", function(snapshot){
            console.log(snapshot.val() );
            //when data updates at Firebase, put it in the data variable
            data = snapshot.val();
        })

        $('#addRoom').submit(function(event){
            var $form = $(this);
            console.log("submit to Firebase");

            //make the submit disabled
            $form.find("#saveForm").prop('disabled', true);

            //get the actual values that we will send to firebase
            var titleToSend = $('#activityTitle').val();

            console.log(titleToSend);

            //take the values from the form, and put them in an object
            var newRoom = {
              "title": titleToSend
            }
            //put the new object into the data array
            data.push(newRoom);
            console.log(data);
            //send the new data to Firebase
                ref.set(data);

            return false;
        })
        
    }
  // added to close function definition

  */


var app = angular.module('bloc-chat', []);
app.controller('AddRoom', function($scope) {
    $scope.newroomname = "Name the new room.";
});

    angular
        .module('chit')
        .controller('AddRoom', ['$firebaseArray', 'ui.bootstrap', AddRoom]);
}();
