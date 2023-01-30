import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todoList: Todo[] = [];
  form: FormGroup;
  progress!: number;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit(): void {
    this.progress = 0;
  }

  updateProgress() {
    this.progress = Math.round(
      (this.todoList.filter((todo) => todo.isCompleted).length /
        this.todoList.length) *
        100
    );
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

  deleteCompleted() {
    this.todoList = this.todoList.filter((todo) => !todo.isCompleted);
    this.updateProgress();
    this.progress = 0;
  }
}
