import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <input type="text" placeholder="할 일 추가" [(ngModel)] = "newText">
    <button (click)="addTodo(newText)">add</button> 
  `,
  styles: ``
})
export class AddTodoComponent implements OnInit{
  @Output() onTodoAdded = new EventEmitter();
  newText:string = '';
  ngOnInit(): void {
  }
  constructor(){};
  addTodo(newText:string){
    this.onTodoAdded.emit(newText)
    this.newText = '';
  }
}
