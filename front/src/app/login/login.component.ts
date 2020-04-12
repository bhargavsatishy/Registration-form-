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
  usr : Users
    constructor(private bs: CrudserviceService, private router: Router) {
        this.usr=new Users()
     }
    btnLoginClick(uid: any,pwd:any) {


        this.bs.CheckLogin(uid.value, pwd.value).subscribe((data) => {
            if (data.length > 0) {
                localStorage.setItem("uname",uid.value)
                this.router.navigate(['profile'])
            }
            else {
                alert('Invalid User...')
            }
        })
    }

    ngOnInit() {
    }
    forgot()
{
    this.router.navigate(['forgot'])
}
}