(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').service('todoService', todoService);
    //This feels more like a factory to me.
    //why didn't you make a factory? I want to know why you chose services because I avoid them like crazy
    //And I want to know why I shouldn't avoid services...
    todoService.$inject = [];
    function todoService() {
        var self = this, count = 0,
            todos = [
                {id: ++count, description: 'Wake Up', completed: false},
                {id: ++count, description: 'Gym', completed: false},
                {id: ++count, description: 'Office', completed: false}
            ], 
            tabs = [
                {id: 1, name: 'all', description: 'All'},
                {id: 1, name: 'todo', description: 'Todo'},
                {id: 1, name: 'completed', description: 'Completed'},
            ];
        self.getTodoList = getTodoList;
        self.addTodo = addTodo;
        self.removeTodos = removeTodos;
        self.getTabs = getTabs;
        self.removeTodo = removeTodo;

        /*
        Okay I'm probably too sleepy but is there anyway this would work? I mean it shoud...*/

        /*
        var fns = [getTodoList, addTodo, removeTodos, getTabs, removeTodo];

        for(var i = 0; i< fns.length; i++){
            self[fns[i]] = fns[i]
        }
        // I'm using native for because its faster.
        // instead of writing a revealing module API, why not this?
         I havent tried this yet but now I'm tempted and I'll try this tomorrow at work...
        */


        
        function getTodoList(){
            return todos;
        }
        // here's an idea. I recently read about ES6 getters/setters why dont you give it a try here?
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

        function getTabs(){
            return tabs;
        }

        function addTodo(description){
            todos.push({
				id: ++count,
				description: description,
				completed: false
			});
            //Here's a tip I got. Never do push. Do this:
            //todos[todos.length] = {id:++count, description:description, completed:false}
            //98% faster on chrome
        }

        function removeTodos(){
            todos = todos.filter(function (todo) {
                return !todo.completed;
            });
            //NAAICE!
        }

        function removeTodo(item){
            var id = item.id, index = -1;
            todos.forEach(function(todo, i){
                if(todo.id=== id) index =i;
            });
            if(index !== -1) todos.splice(index, 1);
            alert('Todo '+ item.description + ' got deleted.');
            //PLEASE NO ALERT! why alert? why oh why? oh god my eyes are bleeding!!!!
            //use a notification! Use john papa's toastr or ngProphet!!!!
            //https://github.com/binarybaba/ngProphet bitch!!
        }
	}
})(window, window.angular);