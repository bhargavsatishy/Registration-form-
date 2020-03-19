import { Component, OnInit, Input } from '@angular/core';
import { CrudserviceService } from '../services/crudservice.service';

import { Users } from '../model/users';
import { Router } from '@angular/router';

import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-postuserss',
  templateUrl: './postuserss.component.html',
  styleUrls: ['./postuserss.component.css']
})
export class PostuserssComponent implements OnInit {


  Users: Users
  activateRoute: any;

  getusers: any
  constructor(private service: CrudserviceService, private router: Router, private actRoute: ActivatedRoute) {
    this.Users = new Users();
  }

  ngOnInit() {
    this.activateRoute = this.actRoute.snapshot.paramMap.get('id');
    this.service.getByid(this.activateRoute).subscribe((data) => {
      this.Users = data;
    })

  }
  submit() {
    this.service.submitForm(this.Users, this.activateRoute).subscribe((data) => {
      this.router.navigate(["login"])
    })

  }
}