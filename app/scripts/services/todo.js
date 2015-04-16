'use strict';

/**
 * @ngdoc service
 * @name yoangularApp.todo
 * @description
 * # todo
 * Service in the yoangularApp.
 */
angular.module('yoangularApp')
  .service('Todo', function ($localStorage) {
    // AngularJS will instantiate a singleton by calling "new" on this function
		$localStorage.$default({todo: [
				{text: 'learn angular', done: true},
				{text: 'build an angular app', done: false}
			]});

		var todoList = this;
		todoList.todos = $localStorage.todo;

		this.getTodos = function () {
			return this.todos;
		}
		todoList.addTodo = function (newTodo) {
			todoList.todos.push({text: newTodo, done: false});

		};

		todoList.remaining = function () {
			var count = 0;
			angular.forEach(todoList.todos, function (todo) {
				count += todo.done ? 0 : 1;
			});
			return count;
		};

		todoList.archive = function () {
			var oldTodos = todoList.todos;
			var newTodo = [];

			angular.forEach(oldTodos, function (todo) {
				if (!todo.done)
					newTodo.push(todo);
			});
			todoList.todos = newTodo;
			$localStorage.todo = newTodo;
		};
		return this;
	});
