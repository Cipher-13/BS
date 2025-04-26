import { AuthService } from './../../../../Services/Auth/auth.service';
import { SharedModule } from './../../../../Shared/Modules/shared/shared.module';
import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotten',
  imports: [SharedModule],
  templateUrl: './forgotten.component.html',
  styleUrl: './forgotten.component.css'
})
export class ForgottenComponent {

  constructor(private s: AuthService , private r:Router){}

  Forget= new FormGroup({

    e:new FormControl(null),

  })

  Submitting(forgottenData:FormGroup){

    this.s.PassForgot(forgottenData.value).subscribe({

    next:(Access)=>{localStorage.setItem('tok',Access.data.accessToken)},
    error:()=>{this.r.navigate(['/'])},
    complete:()=>{this.r.navigate(['/auth/in'])},

    })

  }

}
