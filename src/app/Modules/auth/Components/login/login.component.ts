import { AuthService } from './../../../../Services/Auth/auth.service';
import { SharedModule } from './../../../../Shared/Modules/shared/shared.module';
import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent  {

  Loginbtn:string ="background-color:#EF6B4A ;color:whitesmoke"

  constructor(private s: AuthService , private r:Router){}

  login= new FormGroup({
    e:new FormControl(null),
    p:new FormControl(null),
  })

  Submitting(logindata:FormGroup){

    this.s.Login(logindata.value).subscribe({

    next:(Access)=>{localStorage.setItem('tok',Access.data.accessToken)},
    error:()=>{this.r.navigate(['/'])},
    complete:()=>{this.r.navigate(['/Dashboard/Categories'])},

    })

  }



}

