import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getGeneralPractitioners(){
    return this.http.get(`${this.baseUrl}/doctor/general-practitioners`);
  }

  getDermatologists(){
    return this.http.get(`${this.baseUrl}/doctor/dermatologists`)
  }

  getMaliciousPatients(){
    return this.http.get(`${this.baseUrl}/patient/malicious`);
  }

  getNeurologists(){
    return this.http.get(`${this.baseUrl}/doctor/neurologists`)
  }

  getUsers(){
    return this.http.get(`${this.baseUrl}/patient`);
  }

  getDoctor(id){
    return this.http.get(`${this.baseUrl}/doctor/${id}`);
  }

  getUser(id){
    return this.http.get(`${this.baseUrl}/patient/${id}`);
  }

  getDoctors(){
    return this.http.get(`${this.baseUrl}/doctor`);
  }

  blockPatient(body: any){
    return this.http.put(`${this.baseUrl}/patient/block`, body).pipe(
      map((patient: User) => {
        if(patient){
          localStorage.setItem('patient', JSON.stringify(patient));
        }
        return patient;
      })
    )
  }

}
