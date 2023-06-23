import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tecnico } from '../models/tecnico';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TecnicosService {

  baseUrl: string = environment.baseUrl

  constructor(private http :HttpClient,
      private snack: MatSnackBar
    ) { }

  findAll():Observable<Tecnico[]>{
    const url = this.baseUrl + "/api/tecnico"
    var obj =  this.http.get<Tecnico[]>(url);
    console.log(obj);
    return obj;
  }

  createTecnico(tecnico:Tecnico):Observable<Tecnico>{
    const url = this.baseUrl + "/api/tecnico"
    console.log("passou")
    return this.http.post<Tecnico>(url,tecnico)

  }

  updateTecnico(tecnico:Tecnico):Observable<Tecnico>{
    const url = this.baseUrl + "/api/tecnico/" + tecnico.id
    return this.http.put<Tecnico>(url,tecnico);
  }

  findById(id:any):Observable<Tecnico>{
    const url = this.baseUrl + "/api/tecnico/" + id
    return this.http.get<Tecnico>(url);
  }

  deleteTec(id:any):Observable<any>{
    const url = this.baseUrl + "/api/tecnico/" + id
    const obj = this.http.delete<Tecnico>(url);
    console.log("olá")
    console.log(obj);
    return obj;
  }


message(msg:String){
  this.snack.open(`${msg}`, 'OK',{
    horizontalPosition: 'center',
    verticalPosition:'bottom',
    duration: 4500
  })
}

}
//
