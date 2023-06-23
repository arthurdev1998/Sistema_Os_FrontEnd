import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Tecnico } from '../models/tecnico';
import { TecnicosService } from '../services/tecnicos.service';
import { Router } from '@angular/router';






@Component({
  selector: 'app-tecnico-read',
  templateUrl: './tecnico-read.component.html',
  styleUrls: ['./tecnico-read.component.css']
})



export class TecnicoReadComponent implements AfterViewInit {


  constructor(private service: TecnicosService,
    private router: Router
    ){


  }

  tecnicos: Tecnico[] = []


  ngAfterViewInit(): void {
    this.findAll();
  }






findAll():void{
  this.service.findAll().subscribe((response) => {
    this.tecnicos = response;
  })
}

deleteTecnico(element: any): any {
  this.service.deleteTec(element.id).subscribe((response)=>{

    if(response == null )
    this.service.message("Tecnico cadastrado com sucesso")
  }


  )
}



displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'actions'];

public createTecnico (){
  this.router.navigate(['tecnicos/create']);
}



}
