import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';



@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  feedbacks: any;
  show: any;
  arr = [] as any;
  constructor(private router:Router,  public authService: AuthService) { }

  ngOnInit(): void {
   
  }
 
  loginForm():void{
    this.router.navigate(['login']);
  }

  registrationForm():void{
    this.router.navigate(['register']);
  }

 

}
