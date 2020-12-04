import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './principal/menu/menu.component';
import { PrincipalComponent } from './principal/principal/principal.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: '', redirectTo: "principal", pathMatch:'full'},
  { path: 'principal', component: PrincipalComponent},
  { path: 'registro', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
