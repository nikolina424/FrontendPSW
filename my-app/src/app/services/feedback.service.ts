import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Feedback } from '../models/Feedback';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseUrl = environment.baseUrl;
  private currentFeedbackSource = new ReplaySubject<Feedback>(1);
   currentFeedback$ = this.currentFeedbackSource.asObservable();

  constructor(private http: HttpClient) { }

  getFeedbacks(){
    return this.http.get(`${this.baseUrl}/feedback`);
  }

  getFeedback(id){
    return this.http.get(`${this.baseUrl}/feedback/${id}`);
  }

  createFeedback(body: any){
    return this.http.post(`${this.baseUrl}/feedback`, body).pipe(
      map((feedback: Feedback) => {
        if(feedback){
          localStorage.setItem('feedback', JSON.stringify(feedback));
          this.currentFeedbackSource.next(feedback);
        }
        return feedback;
      })
    )
  }

  setCurrentFeedback(feedback: Feedback){
    this.currentFeedbackSource.next(feedback);
  }

  changeShowOnFrontFeedback(body){ 
    return this.http.put(`${this.baseUrl}/feedback`, body);
  }
}
