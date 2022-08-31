import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  initList: Todo[] = [
    {task: 'fold clothes', completed: false},
    {task: 'put clothes in the dresser', completed: true},
    {task: 'relax', completed: false}
  ];
  filter: string = '';
  todoList: Todo[] = [...this.initList];

  constructor() { }

  ngOnInit(): void {
  }

  doFilter(): void {
    this.todoList = [...this.initList];
    if (this.filter !== '') {
      this.todoList = this.todoList.filter(item => item.task.includes(this.filter));
    }
  }

  doComplete(item: Todo): void {
    const complete = this.todoList.find(i => i.task === item.task);
    if (complete) {
      complete.completed = true;
    }
  }
  
  doRemove(item: Todo): void {
    const removeIdx = this.todoList.findIndex(i => i.task === item.task);
    if (removeIdx !== -1) {
      this.todoList.splice(removeIdx, 1);
      this.initList = [...this.todoList];
    }
  }

  doSave(item: Todo): void {
    if (item.task !== '') {
      this.todoList.push(item);
      this.initList.push(item);
    }
  }

  checkFinish(): boolean {
    if (this.todoList.length === 0) return true;
    const completed = this.todoList.filter(item => item.completed);
    return completed.length === this.todoList.length ? true : false;
  }
}
