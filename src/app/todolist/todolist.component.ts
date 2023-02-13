import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todoList$: Observable<Todo[]> = of([]);
  form: FormGroup;
  progress!: number;

  categories = ['Chores', 'Fitness', 'Shopping', 'Work', 'Project', 'Other'];
  selectedCategory = '';

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      category: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.progressReset();
  }

  progressReset() {
    this.progress = 0;
  }

  updateProgress() {
    this.todoList$.subscribe((todoList) => {
      if (todoList.length === 0) {
        this.progress = 0;
      } else {
        this.progress = Math.round(
          (todoList.filter((todo) => todo.isCompleted).length /
            todoList.length) *
            100
        );
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const newTodo: Todo = {
        task: this.form.get('title')!.value,
        category: this.form.get('category')!.value,
        isCompleted: false,
      };
      this.todoList$.subscribe((todoList) => {
        this.todoList$ = of([...todoList, newTodo]);
      });
      this.form.reset();
      this.updateProgress();
    }
  }

  deleteItem(todo: Todo) {
    this.todoList$.subscribe((todoList) => {
      this.todoList$ = of(todoList.filter((td) => td !== todo));
    });
    this.updateProgress();
  }

  deleteCompleted() {
    this.todoList$.subscribe((todoList) => {
      this.todoList$ = of(todoList.filter((todo) => !todo.isCompleted));
    });
    this.updateProgress();
    this.progressReset();
  }
}
