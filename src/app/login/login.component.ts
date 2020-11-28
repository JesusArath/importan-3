import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import * as alertify from 'alertifyjs'
import { UsuarioModel } from '../modelos/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;
  siteKey:string; 

  constructor(private router: Router) { 
    this.siteKey = "6LfocM8ZAAAAAKlf26m1yZF0uT3_sO2xCJG6E8fp";
    this.usuario = new UsuarioModel();
    this.usuario.email = "jesus19arath@hotmail.com"
  }

  ngOnInit() {
  }

  login(){
    // alertify.notify('Ingrese de nuevo', 'error', 50);
    this.router.navigate(["/principal"]);
  }

}
