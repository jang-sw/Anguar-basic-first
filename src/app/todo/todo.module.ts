import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
@NgModule({
  declarations: [TodosComponent, TodoComponent, AddTodoComponent], //선언 (주로 템플릿 쓸수 있는거)
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TodosComponent] //외부에서 쓸수 있도록
})
export class TodoModule { }
