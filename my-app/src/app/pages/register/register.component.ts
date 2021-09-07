import { UserService } from './../../services/user.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  baseUrl = environment.baseUrl;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient, private userService: UserService) { }

  model: any = {}
  doctors: any;

  ngOnInit(): void {
    this.getGeneralPractitioners();
  }


  register(): void {
   
       this.authService.register(this.model).subscribe(response =>{
        console.log(this.model)
        this.router.navigate(['login']);
       }, error => {
         console.log(error);
       })
  }

  getGeneralPractitioners(){
    this.userService.getGeneralPractitioners().subscribe(response =>{
      this.doctors = response;
      console.log(this.doctors)
    }, error =>{
      console.log(error);
    })
  }

  changeSelect(e, formLogin){
    console.log(e.target.value);
    console.log(formLogin)
  
  }

}
