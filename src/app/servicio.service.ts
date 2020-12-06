import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient,) { 
  }

  // Url = "http://localhost:3000/"
  Url = "https://importan-3back.azurewebsites.net/"
  headers = new HttpHeaders();

  obtenerPdf(i){
    const hola = {prima: 152}
    const headers = this.headers.set('Accept', 'application/pdf');
    return this.http.post(this.Url, hola, {headers: headers, responseType: 'blob'})
  }

}
