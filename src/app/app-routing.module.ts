import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostusersComponent } from './postusers/postusers.component';
import { LoginComponent } from './login/login.component';
import { PostuserssComponent } from './postuserss/postuserss.component';

const routes: Routes = [
  { path: '', component: PostusersComponent },
  { path: 'post', component: PostusersComponent },
  { path: 'postuser/:id', component: PostuserssComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
