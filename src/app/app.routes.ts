
import { Routes } from '@angular/router';
import { layoutResolver } from './Core/Resolvers/layout.resolver';
import { Layout } from './Core/Enums/Layout.enum';
export const routes: Routes = [ //Parent routes --> 4200/path


  {path:'' , redirectTo:'auth' ,pathMatch:'full'},

  {//App Entry Point
    path: 'auth', loadChildren: () => import('./Modules/auth/auth.module').then(a => a.AuthModule),
    resolve: { l: layoutResolver(Layout.NonAuthorizedUser) }
  },

  {
    path: 'Dashboard', loadChildren: () => import('./Modules/logic/logic.module').then(d => d.LogicModule),
    resolve: { l: layoutResolver(Layout.AuthorizedUser) }
  },


  {
    path: '**', loadComponent: () => import('./Components/notfound/notfound.component').then(e => e.NotfoundComponent),
    resolve: { l: layoutResolver(Layout.Error) },
    title: 'Error'
  },

];
