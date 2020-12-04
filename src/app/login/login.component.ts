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
  }

  ngOnInit() {
  }



}
