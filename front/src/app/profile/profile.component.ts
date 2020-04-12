import { Component, OnInit } from '@angular/core';
import { register, timer } from 'src/app/model/register';
import { Router } from '@angular/router';
import { CrudserviceService } from '../services/crudservice.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: register;
  signup: any;

  timeLeft: number = 60;
  interval;

  description: string;

  descriptions: string[] = []

  timers:any[] = [] ;
  profileData:any




  constructor(private pfs: CrudserviceService, private router: Router) {
    this.profile = new register();

  }




  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.timers.push(this.timeLeft);
    this.descriptions.push(this.description)

    this.profile.timer.push(this.timeLeft)
    this.profile.description.push(this.description)

    this.timeLeft = 60;
    console.log(this.timers)
    console.log(this.descriptions)


    this.pfs.timerUpdate(this.profile.username,this.timers,this.descriptions).subscribe((data) => {

    })



  }


  ngOnInit() {


    let b = localStorage.getItem("uname");

    this.pfs.Profile(b).subscribe(
      (data) => {
        console.log(data[0])
        this.profileData=data[0]
        this.profile.name = data[0].name
        this.profile.username = data[0].username

        this.profile.email = data[0].email
        this.profile.timer = data[0].timer
        this.profile.description = data[0].description
        this.timers = data[0].timer
        this.descriptions = data[0].description

      });
  }
}


