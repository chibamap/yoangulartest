'use strict';

/**
 * @ngdoc function
 * @name yoangularApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the yoangularApp
 */
angular.module('yoangularApp')
  .controller('TodoCtrl', function (todo) {
		var todoList = this;
	todoList.todos = todo.todos;
    todoList.addTodo = function() {
			if (!todoList.todoText) {
				return;
			}
			todo.addTodo(todoList.todoText);
      todoList.todoText = '';
			todoList.todos = todo.getTodos();
    };
 
    todoList.remaining = function() {
			return todo.remaining();
    };
 
    todoList.archive = function() {
			todo.archive();
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });
