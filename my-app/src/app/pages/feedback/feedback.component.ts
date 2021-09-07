import { UserService } from './../../services/user.service';
import { FeedbackService } from './../../services/feedback.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

 
  feedbacks: any;

  constructor(private route: ActivatedRoute, private feedbackService: FeedbackService , private userService: UserService) { }

  ngOnInit(): void {
    this.getFeedbacks();
  
  }

  getFeedbacks(){
    this.feedbackService.getFeedbacks().subscribe(response =>{
      this.feedbacks = response;
      console.log(this.feedbacks)
    }, error =>{
      console.log(error);
    })
  }


  show(feedback): void{
    var id = Number(feedback.id);
    const body = {
      Id: id,
      ShowOnFront: true
    }
       this.feedbackService.changeShowOnFrontFeedback(body).subscribe(response => {
        this.getFeedbacks();
        console.log(feedback.id);
        console.log(feedback.ShowOnFront);
     }, error => {
       console.log(error);
     })
  }

  hide(feedback): void{
    var id = Number(feedback.id);
    const body = {
      Id: id,
      ShowOnFront: false
    }
       this.feedbackService.changeShowOnFrontFeedback(body).subscribe(response => {
        this.getFeedbacks();
        console.log(feedback.id);
        console.log(feedback.ShowOnFront);
     }, error => {
       console.log(error);
     })
  }
}
