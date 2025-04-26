import { ResetterComponent } from './Components/resetter/resetter.component';
import { ForgottenComponent } from './Components/forgotten/forgotten.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeableComponent } from './Components/changeable/changeable.component';

const routes: Routes = [ // routeroutlet -> 4200/parentpath(auth)/ child path

  {path :'', redirectTo:'in' ,pathMatch:'full'},
  {path :'in', component:LoginComponent ,title:'Sign-in'},
  {path :'up', component: RegisterComponent,title:'Sign-Up'},
  {path :'pass_f', component:ForgottenComponent ,title:'Forgot pass ?'},
  {path :'pass_c', component: ChangeableComponent,title:'Update ur Pass'},
  {path :'pass_r', component: ResetterComponent,title:'Reset ur Pass'},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
