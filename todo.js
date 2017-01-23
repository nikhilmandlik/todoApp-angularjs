var todoApp = angular.module('todoApp',[]);

todoApp.controller('todoController', ['$scope' , function ($scope) {
    $scope.todoList = [];

    $scope.clearAll = function () {
        $scope.todoList.some(function(todo) {
            todo.done = false;
        });
    }

   $scope.getTodoLength = function () {
       return $scope.todoList.length;
   }

   $scope.getSelectedTodoLength = function () {
       var output = false;
       $scope.todoList.some(function(todo) {
           if (todo.done) {
               output = true;
               return output;
           }
       });

       return output;
   }

    $scope.removeSelected = function () {
       var output = [];
       $scope.todoList.forEach(function(todo) {
           if (!todo.done) {
               output.push(todo);
           }
       });
       $scope.todoList = output;
    }

    $scope.removeAll = function () {
        $scope.todoList = [];
    }

    $scope.selectAll = function () {
        $scope.todoList.some(function(todo) {
            todo.done = true;
        });
    }

   $scope.submit = function () {
       if ($scope.newTodoText === "") {
         return;
       }

       var newTodo = {
         text: $scope.newTodoText,
       done: false
     }

     $scope.todoList.push(newTodo);
     $scope.newTodoText = "";
   }
}]);
