import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { User } from '../user';

@Component({
  selector: 'app-startup-details',
  templateUrl: './startup-details.component.html',
  styleUrls: ['./startup-details.component.css']
})
export class StartupDetailsComponent implements OnInit {

  startupDetails: User[];
  
  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
    this.enrollmentService.getEnrolledUsers().subscribe(
      data => {
        console.log(data);
        this.startupDetails = data;
      }, 
      err => console.log(err));
  }

}
