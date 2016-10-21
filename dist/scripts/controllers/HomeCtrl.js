(function() {
    function HomeCtrl($firebaseArray, $uibModal) {  
    	var $ctrl = this;

		var ref = firebase.database().ref().child("rooms");
		  // create a synchronized array
		  // click on `index.html` above to see it used in the DOM!
		this.rooms = $firebaseArray(ref);

//		this.rooms.$add({roomName: "TRMS"}); // functional test for adding a room

		window.foo = this.rooms;

		$ctrl.open = function () {
			console.log("Open was clicked")
			var modalInstance = $uibModal.open({
			  templateUrl: '/templates/addRoom.html',
//			  templateUrl: 'myModalContent.html',
			});
		};

	}

    angular
        .module('bloc-chat')
        .controller('HomeCtrl', ['$firebaseArray', '$uibModal', HomeCtrl]); 
        
})();
