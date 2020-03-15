import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostusersComponent } from './postusers/postusers.component';
import { EdituserComponent } from './edituser/edituser.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: PostusersComponent },
  { path: 'post', component: PostusersComponent },
  { path: 'edit/:id', component: EdituserComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
