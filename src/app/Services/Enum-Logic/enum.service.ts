import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Layout } from '../../Core/Enums/Layout.enum';

@Injectable({
  providedIn: 'root'
})
export class EnumService {

  constructor() { }

  public Layout = new Subject<Layout>(); // special type of observable can be listened on for tracking multicast vars  "enums keys"
  //لو انت موجود في اي حته وندهن ال service
  // عليطول ال subject var هيبقي updated
  //public عشان قلنا هننده علبها في اي حتة

  Layouts = this.Layout.asObservable() //to be considerd as observable so we can subscribe on  (at html) 

  settingLayout(value: Layout) { this.Layout.next(value) } // assigning the current value (of type enum keys) to the subject var ->updating NEW layout
 //this.Layout =value  كاني  بقول  لكن بطريقة ال نكست عشان ده مش متغير عادي ده obervable
//called at resolver

}
