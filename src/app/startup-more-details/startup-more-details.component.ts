import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-startup-more-details',
  templateUrl: './startup-more-details.component.html',
  styleUrls: ['./startup-more-details.component.css']
})
export class StartupMoreDetailsComponent implements OnInit {

  startupDetail: any;
  id: any;
  
  constructor(private enrollmentService: EnrollmentService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params['id'])
   }

  ngOnInit(): void {
    this.enrollmentService.getEnrolledUsers().subscribe(
      data => {
        this.startupDetail = data[this.id];
        console.log(this.startupDetail);
      }, 
      err => console.log(err));
  }

}
