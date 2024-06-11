import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../share/todo.model';

@Component({
  selector: 'app-todo',
  template: `
     <input type="checkbox" [checked]="todo.done"> {{todo.text}}  
  `,
  styles: [`
    :host{
      display: block;
      padding: 16px;
      color: darkgray;
      background-color: white;
    }
    input:before{
      content:
      ""

    }
  `],

})
export class TodoComponent {
  @Input() todo: Todo = new Todo()

}
