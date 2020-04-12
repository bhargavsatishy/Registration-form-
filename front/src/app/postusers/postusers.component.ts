import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../services/crudservice.service';

import { Users } from '../model/users';
import { register } from '../model/register';

import { Router } from '@angular/router';
@Component({
  selector: 'app-postusers',
  templateUrl: './postusers.component.html',
  styleUrls: ['./postusers.component.css']
})
export class PostusersComponent implements OnInit {
  reg : register
  
  constructor(private ats : CrudserviceService, private router:Router) { 
    this.reg =new register()
  }
  // btnAddAuthClick(myFrm:any)
  // {
    
  //    // alert(JSON.stringify(frm.value))
  //    //alert(JSON.stringify(this.ath))
     
  //    this.ats.AddMembers(this.reg).subscribe(
  //        (data)=>{
  //            console.log(data);
  //           alert('Saved Success...')
  //           this.router.navigate(['login'])  

  //        }
  //    )
     
  // }

  btnAddAuthClick(username: string, myFrm: string) {


    this.ats.CheckLogin1(this.reg.username).subscribe((data) => {
      if (data.length > 0) {
        // localStorage.setItem("uname", username)
        // localStorage.getItem("username")

        // this.router.navigate(['home'])
        alert("user already exist...")
      }
      else {
        this.ats.AddMembers(this.reg).subscribe((data) => {
          alert("posted successfully....")
          this.router.navigate(['login'])
        })
      }
    })
  }


  ngOnInit() {
  }

}
