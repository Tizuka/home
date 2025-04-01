import { Component } from '@angular/core';
import { Todo } from '../class/todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todolist',
  imports: [FormsModule,CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {
    todoValue: String = '';
    todoList: Todo[] = [
    {  content: "todo 1",
      value: false},
      {  content: "todo 2",
        value: false},
        {  content: "todo 3",
          value: false}
    ];
    // finishedList: Todo[] = {}
    constructor(){

    }
    addTodo(){
      if (this.todoValue.trim() !== '') {
        this.todoList.push({content:this.todoValue, value:false})
        this.todoValue = '';  }

    }

    removeTodo(index: number) {
      this.todoList.splice(index, 1);
    }


};
