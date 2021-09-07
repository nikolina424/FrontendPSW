import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}
  currentUser$: Observable<User>;
  

  constructor(private authService: AuthService, private router:Router) { }
 
  
  ngOnInit(): void {
    this.currentUser$ = this.authService.currentUser$;
  }
  
  login() {
      this.authService.login(this.model).subscribe(response => {
        console.log("saljem ga na homepage");
        this.router.navigateByUrl('/homepage');
      }, error => { console.log(error.error);
      })
  }


}
