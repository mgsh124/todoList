import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = {
    task: '',
    completed: false
  };

  @Output() complete = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  completeItem(item: Todo): void {
    console.log(`Complete item: ${item.task}`);
    this.complete.emit();
  }
  
  removeItem(item: Todo): void {
    console.log(`Remove item: ${item.task}`);
    this.remove.emit();
  }
}
