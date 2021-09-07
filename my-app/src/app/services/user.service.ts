import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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
}
