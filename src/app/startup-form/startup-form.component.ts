import { Component } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startup-form',
  templateUrl: './startup-form.component.html',
  styleUrls: ['./startup-form.component.css']
})
export class StartupFormComponent {
  age =[' >18-30 ','30-45',' >45'];
  size=['2-5','6-50','>50 but <100'];
  type=['Tech','lifestyle','service-only'];
  userModel = new User('','','',9999999999,'','','','',9999999999,
  '','',9999999999,'','','','','','','',true,true,
  true,'','','','');
  submitFlag: boolean=false;

  constructor(private _enrollmentService: EnrollmentService, private router:Router){}

  goToHome(){
    this.router.navigateByUrl('/home')
  }
  onSubmit(){
    // this._enrollmentService.enroll(this.userModel)
    // .subscribe(
    //   data => console.log('Success!', data),
    //   error => {
    //     return console.error('Error', error);
    //   }
    // )
    this._enrollmentService.enroll(this.userModel).subscribe(res=>{
      console.log("Success",res)
      if(res)
      {
        this.submitFlag = true;
      }
      else
      {
        this.submitFlag = false;
      }
    })

  }
}
