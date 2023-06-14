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

message(msg:String){
  this.snack.open(`${msg}`, 'OK',{
    horizontalPosition: 'end',
    verticalPosition:'top',
    duration: 3000
  })
}

}
//
