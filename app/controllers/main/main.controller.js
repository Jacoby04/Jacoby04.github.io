'use strict';

angular.module('app.Controllers').controller('MainCtrl', function(){
	
	// vm = ViewModel
	var vm = this;
	
	vm.title = "Welcome to Jacob's Web Playground!";
	
	vm.comments = [];
	vm.newComment = "";
	vm.secretComment = "";
	
	vm.addComment = function() {
		if (vm.newComment != "" && vm.secretComment == "") {
			vm.comments.push(vm.newComment);
			vm.newComment = "";
		}
	};
	
});