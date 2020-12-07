import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient,) { 
  }

  Url = "https://importan-3-back.azurewebsites.net/"
  
  headers = new HttpHeaders();

  obtenerPdf(i){
    const hola = {prima: 152}
    console.log("huevos")
    const headers = this.headers.set('Accept', 'application/pdf');
    return this.http.post(this.Url, hola, {headers: headers, responseType: 'blob'})
  }

}
