import { formatCurrency } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() save = new EventEmitter<Todo>();
  newTodo: Todo = {task: '', completed: false};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.save.emit({...this.newTodo});
    this.newTodo.task = '';
  }
}
