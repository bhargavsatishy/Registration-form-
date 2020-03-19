import { Component, OnInit, Input } from '@angular/core';
import { CrudserviceService } from '../services/crudservice.service';

import { Users } from '../model/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Users: Users

  getusers: any
  constructor(private service: CrudserviceService, private router: Router) {
    this.Users = new Users();
  }

  ngOnInit() {
    this.service.get().subscribe((data) => {
      this.getusers = data
    })
  }
}
