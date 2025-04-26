import { Component } from '@angular/core';
import { SharedModule } from '../../Modules/shared/shared.module';

@Component({
  selector: 'app-header',
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  phoneNumber = '+918374902234';

}
