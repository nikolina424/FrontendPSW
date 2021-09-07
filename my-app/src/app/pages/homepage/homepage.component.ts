import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  users: any;
  public isAdmin: boolean;
  public isPatient: boolean;
  public isDoctor: boolean;
  private user: any;

  constructor(private router:Router, public authService: AuthService, public userService: UserService) {}
  
  ngOnInit() {
     this.setupUser();
     this.setupUserType();              
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.authService.setCurrentUser(user);
  }


  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private setupUserType(): void {
    this.isAdmin = false;
    this.isDoctor = false;
    this.isPatient = false;
    if(this.user.userType == 0){
      this.isAdmin = true;
    }else if(this.user.userType == 2){
      this.isDoctor = true;
    }else if(this.user.userType == 1){
      this.isPatient = true;
    }
  }

  getUsers(){
    this.userService.getUsers().subscribe(response =>{
      this.users = response;
    }, error =>{
      console.log(error);
    })
  }

  
  logout(){
    console.log("nE")
    this.authService.logout();
    this.router.navigate(['frontpage']);
  }

  createFeedback():void{
    this.router.navigate(['homepage/new-feedback']);
  }

  getAllFeedbacks(){
    this.router.navigate(['homepage/feedback']);
  }
}
