import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient,) { 
  }

  Url = "http://localhost:3000/"

  obtenerPdf(i){
    const hola = {prima: 152}
    return this.http.post(this.Url, hola)
  }

}
