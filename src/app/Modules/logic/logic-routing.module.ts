
import { CartComponent } from './Components/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ //Child routes --> 4200/parentPath(Dashboard)/path

 //{path :'', redirectTo:'Categories' ,pathMatch:'full'},
  {path :'Purchasing', component:CartComponent ,title:'Shopping Cart'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogicRoutingModule {



 }
