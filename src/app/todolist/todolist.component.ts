import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.interface';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todoList: Todo[] = [];
  form: UntypedFormGroup;
  progress!: number;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit(): void {
    this.progressReset();
  }

  progressReset() {
    this.progress = 0;
  }

  updateProgress() {
    if (this.todoList.length === 0) {
      this.progress = 0;
    } else {
      this.progress = Math.round(
        (this.todoList.filter((todo) => todo.isCompleted).length /
          this.todoList.length) *
          100
      );
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const newTodo: Todo = {
        task: this.form.get('title')!.value,
        isCompleted: false,
      };
      this.todoList.push(newTodo);
      this.form.reset();
      this.updateProgress();
    }
  }

  deleteItem(todo: Todo) {
    this.todoList = this.todoList.filter((td) => td !== todo);
    this.updateProgress();
  }

  deleteCompleted() {
    this.todoList = this.todoList.filter((todo) => !todo.isCompleted);
    this.updateProgress();
    this.progressReset();
  }
}
