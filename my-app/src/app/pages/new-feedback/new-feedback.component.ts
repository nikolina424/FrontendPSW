import { FeedbackComponent } from './../feedback/feedback.component';
import { FeedbackService } from './../../services/feedback.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.component.html',
  styleUrls: ['./new-feedback.component.css']
})
export class NewFeedbackComponent implements OnInit {

  public alertSucc = false;
  validateForm: FormGroup;
  

  constructor( private fb: FormBuilder, private feedbackService: FeedbackService, public authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      feedbackContent: [null, [Validators.required]]
    });
  }

  submitForm(): void{
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const user: User = JSON.parse(localStorage.getItem('user'));
    this.authService.setCurrentUser(user);
    const body = {
      PatientId: user.id,
      FeedbackContent: this.validateForm.value.feedbackContent,
      ShowOnFront: false
    }
    console.log(body)
    this.feedbackService.createFeedback(body).subscribe(response => {
      this.alertSucc = true;
  }, error => {
    console.log(error);
  })
  }


}
