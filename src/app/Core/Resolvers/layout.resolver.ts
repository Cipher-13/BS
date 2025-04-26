import { EnumService } from './../../Services/Enum-Logic/enum.service';
import { inject } from '@angular/core';
import { Layout } from './../Enums/Layout.enum';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

export const layoutResolver=(input:Layout):ResolveFn<void> => { //resolve for each enum key i have
  return (route:ActivatedRouteSnapshot,state:RouterStateSnapshot) =>{inject(EnumService).settingLayout(input)}
};

//resolver : performed before navigation
// applied at main app.routes (controls app layouts navigation)
