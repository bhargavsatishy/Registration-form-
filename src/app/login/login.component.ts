import { Component, OnInit } from '@angular/core';
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

    this.service.getByid().subscribe((data) => {
      alert(JSON.stringify(data))
      this.getusers = data
    })

  }



  delete(id: any) {
    this.service.delete(id).subscribe((data) => {
      alert(JSON.stringify(data))
    })
  }

  edit(id: any) {
    this.router.navigate(['edit/' + id])

  }


 

}
