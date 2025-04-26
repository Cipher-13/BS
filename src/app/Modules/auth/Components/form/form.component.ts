import { Component } from '@angular/core';
import { SharedModule } from '../../../../Shared/Modules/shared/shared.module';

@Component({
  selector: 'app-form',
  imports: [SharedModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  FormImage= "../assets/Images/Form.png";
  Logo="../assets/Images/Logo.png";
}
