import { AuthService } from './../../../../Services/Auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedModule } from './../../../../Shared/Modules/shared/shared.module';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changeable',
  imports: [SharedModule],
  templateUrl: './changeable.component.html',
  styleUrl: './changeable.component.css'
})
export class ChangeableComponent {
  Loginbtn:string ="background-color:#EF6B4A ;color:whitesmoke"
  
  constructor(private s: AuthService , private r:Router){}

  Change= new FormGroup({

    e:new FormControl(null),
    p:new FormControl(null),

  })


  Submitting(ChagedData:FormGroup){

    this.s.PassChange(ChagedData.value).subscribe({

    next:(Access)=>{localStorage.setItem('tok',Access.data.accessToken)},
    error:()=>{this.r.navigate(['/'])},
    complete:()=>{this.r.navigate(['/auth/in'])},

    })

  }
}
