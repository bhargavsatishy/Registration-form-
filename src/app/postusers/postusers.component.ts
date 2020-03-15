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

  ngOnInit() {

    this.service.getByid().subscribe((data) => {
      alert(JSON.stringify(data))
      this.getusers = data
    })

  }
  submit() {
    alert(JSON.stringify(this.Users))
    // alert(id1.value + id2.value + id3.value)
    this.service.submit(this.Users).subscribe((data) => {
      console.log(data)
      // alert(JSON.stringify(data))
      this.router.navigate(["login"])

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
