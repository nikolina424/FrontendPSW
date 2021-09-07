import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FeedbackService } from './../../services/feedback.service';



@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  feedbacks: any;
  show: any;
  arr = [] as any;
  constructor(private router:Router, private feedbackService: FeedbackService , public authService: AuthService) { }

  ngOnInit(): void {
    this.getFeedbacks(); 
  }
 
  loginForm():void{
    this.router.navigate(['login']);
  }

  registrationForm():void{
    this.router.navigate(['register']);
  }

  getFeedbacks(){
    this.feedbackService.getFeedbacks().subscribe(response =>{
      this.feedbacks = response;
      this.show = response;
     this.show.forEach(element => {
     
       if(element.showOnFront){
         this.arr.push(element);
       }
       
     });
    }, error =>{
      console.log(error);
    })

  
  }

 

}
