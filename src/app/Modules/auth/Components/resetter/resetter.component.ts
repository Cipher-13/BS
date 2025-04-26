import { AuthService } from './../../../../Services/Auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from './../../../../Shared/Modules/shared/shared.module';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetter',
  imports: [SharedModule],
  templateUrl: './resetter.component.html',
  styleUrl: './resetter.component.css'
})
export class ResetterComponent {

    Loginbtn:string ="background-color:#EF6B4A ;color:whitesmoke"

    
  constructor(private s: AuthService , private r:Router){}

    Reset= new FormGroup({

      e:new FormControl(null),
      o:new FormControl(null),
      p:new FormControl(null),

    })
    Submitting(resettedData:FormGroup){

      this.s.PassReset(resettedData.value).subscribe({
  
      next:(Access)=>{localStorage.setItem('tok',Access.data.accessToken)},
      error:()=>{this.r.navigate(['/'])},
      complete:()=>{this.r.navigate(['/auth/in'])},
  
      })
  
    }
}
