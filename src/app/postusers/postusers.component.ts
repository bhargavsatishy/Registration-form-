import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../services/crudservice.service';

import { Users } from '../model/users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-postusers',
  templateUrl: './postusers.component.html',
  styleUrls: ['./postusers.component.css']
})
export class PostusersComponent implements OnInit {
  Users: Users

  getusers: any
  constructor(private service: CrudserviceService, private router: Router) {
    this.Users = new Users();
  }

  ngOnInit() { }

  submit() {
    this.service.submit(this.Users).subscribe((data) => {
      this.router.navigate(["/postuser/", data.id])
    })

  }
}
