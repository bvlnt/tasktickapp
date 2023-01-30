import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todoList: Todo[] = [];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit(): void {
    this.todoList = [
      { task: 'Task 1', isCompleted: false },
      { task: 'Task 2', isCompleted: false },
      { task: 'Task 3', isCompleted: false },
    ];
  }

  onSubmit() {
    if (this.form.valid) {
      const newTodo: Todo = {
        task: this.form.get('title')!.value,
        isCompleted: false,
      };

      this.todoList.push(newTodo);
      this.form.reset();
    }
  }

  deleteCompleted() {
    this.todoList = this.todoList.filter((todo) => !todo.isCompleted);
  }
}
