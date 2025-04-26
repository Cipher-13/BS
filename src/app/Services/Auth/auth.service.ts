import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  constructor(private http: HttpClient) {}


  Login(data:FormGroup):Observable<any> {
    return this.http.post("api/auth/login",data);
  }

  Register(data:FormGroup):Observable<any> {
    return this.http .post("api/auth/register",data);
  }

  PassForgot(data:FormGroup):Observable<any> {
    return this.http.post("api/auth/forgot-password",data);
  }


  PassChange(data:FormGroup):Observable<any> {
    return this.http.post("api/auth/change-password",data);
  }


  PassReset(data:FormGroup):Observable<any> {
    return this.http.post("api/auth/reset-password",data);

  }

  logout():Observable<any> {
    return this.http.get("api/auth/logout");
  }

}
