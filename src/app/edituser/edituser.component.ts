import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users';
import { ActivatedRoute } from '@angular/router';
import { CrudserviceService } from '../services/crudservice.service';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  Users: Users
  id:any
  constructor(private acr: ActivatedRoute, private service: CrudserviceService) { }

  ngOnInit() {
    this.id = this.acr.snapshot.params.id
    this.service.get1(this.id).subscribe((data) => {
      this.Users = data
      alert(JSON.stringify(data))
    })
  }

  edit()
  {
    this.service.edit(this.id,this.Users).subscribe((data) => {
      this.Users = data
      alert(JSON.stringify(data))
    })
  }

}
