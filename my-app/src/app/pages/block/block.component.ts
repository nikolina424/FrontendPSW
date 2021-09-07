import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  patients: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.getMaliciousPatients();
  
  }


  getMaliciousPatients(){
    this.userService.getMaliciousPatients().subscribe(response =>{
      this.patients = response;
      console.log(this.patients)
    }, error =>{
      console.log(error);
    })
  }

  block(patient) : void {
    var id = Number(patient.id);
    const body = {
      Id: id
    }
       this.userService.blockPatient(body).subscribe(response => {
        this.getMaliciousPatients();
     }, error => {
       console.log(error);
     })
  }


}
