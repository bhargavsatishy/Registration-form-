import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostusersComponent } from './postusers/postusers.component';
import { CrudserviceService } from './services/crudservice.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PostuserssComponent } from './postuserss/postuserss.component'
@NgModule({
  declarations: [
    AppComponent,
    PostusersComponent,
    LoginComponent,
    PostuserssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CrudserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
