/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = [];
  }

  getAll() {
    return this.todoList;
  }

  add(task) {
    this.todoList.push(task);
  }

  clear() {
    this.todoList = [];
  }

  get(indexOfTask) {
    if (indexOfTask >= 0 && indexOfTask < this.todoList.length) {
      return this.todoList[indexOfTask];
    } else {
      return null;
    }
  }

  remove(indexOfTask) {
    if (indexOfTask >= 0 && indexOfTask < this.todoList.length) {
      this.todoList.splice(indexOfTask, 1);
    } else {
      console.log("Please give valid index");
    }
  }

  update(index, updatedTask) {
    if (index >= 0 && index < this.todoList.length) {
      this.todoList[index] = updatedTask;
    } else {
      console.log("Please give valid index");
    }
  }
}

module.exports = Todo;
