import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostusersComponent } from './postusers/postusers.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: PostusersComponent },
  { path: 'register', component: PostusersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
