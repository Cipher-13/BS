import { AuthService } from './../../../../Services/Auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from './../../../../Shared/Modules/shared/shared.module';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  Loginbtn: string = "background-color:#EF6B4A; color:whitesmoke";

  constructor(private s: AuthService, private r: Router) { }

  register = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    e: new FormControl('', [Validators.required, Validators.email]),
    p: new FormControl('', [Validators.required, Validators.minLength(6)]),
    r: new FormControl('user', [Validators.required])
  });
  

  Submitting(registerdata: FormGroup) {


    this.s.Register(registerdata.value).subscribe({
      next: (response) => {
        if (response.data?.accessToken) {
          localStorage.setItem('tok', response.data.accessToken);
        }

      },

      error: () => {
        alert('Registration failed. Please try again.');

      },

      complete: () => { this.r.navigate(['/auth/in']); }
    });
  }
}
