(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').controller('todoAppController', todoAppController);

	todoAppController.$inject = ['todoService']; // I never do this man. Thanks for this.
	// Question: what's the advantage of doing this? I mean its neat and maintainable but I'm sure that's not the only reason..
	function todoAppController(todoService){
		var main = this; // I'm guessing this is somewhere close to controllerAs style?
		main.addTodo = addTodo;

		function addTodo(){
			todoService.addTodo(main.latestTodo);
			main.latestTodo = '';
		}

		//init
		function $onInit(){ // okay what was this? Is this some kind of event that angular fires?
			main.latestTodo = '';
		}
	}

})(window, window.angular);