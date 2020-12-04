import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//Angular Material
import {MatToolbarModule,MatSidenavModule,
  MatCardModule, MatIconModule,
  MatGridListModule, MatTabsModule,
  MatInputModule, MatFormFieldModule,
  MatSliderModule,MatButtonModule,
  MatRadioModule, MatSelectModule,
  MatExpansionModule, MatTableModule, MatStepperModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal/principal.component';
import { MenuComponent } from './principal/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './registro/registro.component';

const AngularMaterialApi: any = [
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatGridListModule,
  MatTabsModule,
  MatInputModule,
  MatFormFieldModule,
  MatSliderModule,
  MatRadioModule,
  MatSelectModule,
  MatExpansionModule,
  MatTableModule,
  MatStepperModule
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    MenuComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    AngularMaterialApi
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
