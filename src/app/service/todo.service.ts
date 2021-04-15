import { Injectable } from '@angular/core';
import { of } from 'rxjs'
import { Todo } from '../model/Todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos!: Todo[];

  constructor() {
    this.todos = [
      {
        id: '1',
        title: 'learn angular',
        isComplete: false,
        date: new Date()
      },
      {
        id: '2',
        title: 'learn react',
        isComplete: false,
        date: new Date()
      },
      {
        id: '3',
        title: 'learn js',
        isComplete: true,
        date: new Date()
      },
    ]
  }

  getTodos() {
    return of(this.todos)
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  changeStatus(todo: Todo) {
    this.todos.map(todoInArray => {
      if (todoInArray.id === todo.id)
        todo.isComplete = !todo.isComplete
    })
  }

  deleteTodo(todo: Todo) {
    const indexOfTodo = this.todos.findIndex(currentTodo => currentTodo.id === todo.id)
    this.todos.splice(indexOfTodo, 1)
  }

}
