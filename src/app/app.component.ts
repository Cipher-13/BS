import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnumService } from './Services/Enum-Logic/enum.service';
import { CommonModule } from '@angular/common';
import { Layout } from './Core/Enums/Layout.enum';
import { NotfoundComponent } from "./Components/notfound/notfound.component";
import { FormComponent } from "./Modules/auth/Components/form/form.component";
import { MasterComponent } from "./Modules/logic/Components/master/master.component";
import { HeaderComponent } from "./Shared/Layout/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NotfoundComponent, FormComponent, MasterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BS';
  Pl=Layout; // cant deal with enums directly at html must a mutual friend  + read only to gurantee not to be messed with
  constructor (public s:EnumService){ }
}
