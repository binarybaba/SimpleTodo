(function(window, angular, undefined){
	'use strict';
	
	//Dumb component
	angular.module('todoApp').component('todoItem', {
		bindings: {
			item: '<' //WHOA WTF?! youre gonna explain this.
		},
		require: {
			todoList: "^todoList" //upar wala todolist? matlab parent direcive todolist?
		},
        templateUrl: "/app/todo-item/todo-item.component.html",
		controller: angular.noop, //TODO look for alternative
		controllerAs: "todoItem"
		//angular.noop? hain ji kya hai ye ji ?
    });

})(window, window.angular);