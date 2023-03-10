import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/authguard.guard';
import { LoginComponent } from './login/login.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'todolist',
    component: TodolistComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '#', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
