import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GuardService } from './services/guard.service';
import { GuardnoauthService } from './services/guardnoauth.service';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[GuardService]
  },
  {
    path: 'login',
    component:LoginComponent,
    canActivate:[GuardnoauthService]
  },
  {
    path: 'register',
    component:SignupComponent,
    canActivate:[GuardnoauthService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
