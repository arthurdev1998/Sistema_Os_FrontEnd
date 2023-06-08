import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tecnico } from '../models/tecnico';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnicosService {

  baseUrl: string = environment.baseUrl

  constructor(private http :HttpClient ) { }

  findAll():Observable<Tecnico[]>{
    const url = this.baseUrl + "/api/tecnico"
    var obj =  this.http.get<Tecnico[]>(url);
    console.log(obj);
    return obj;
  }
}
//
