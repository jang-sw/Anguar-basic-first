import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos', //#을 붙여서 id에 적용되개 할 수 있음 . - class 없으면 그냥 요소
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit{
  newText: string = '';
  today: Date = new Date();
  todos: {
    done: boolean,
    text: string
  }[];
  constructor(){
    this.todos = [
      {done: false, text:'운동하기'},
      {done: true, text:'공부하기'}, 
    ]
  }
  ngOnInit(): void {
  }
  togleTodo(todo: any): void{
    todo.done = !todo.done
  }
  addTodo(text: string){
    this.todos.push({
      done: false,
      text: text,  
    })
  }

}
