import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TecnicosService } from '../services/tecnicos.service';
import { Tecnico } from '../models/tecnico';
import { Console } from 'console';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  tecnico:Tecnico = {
    id:'',
    nome:'Arthur Morioh',
    cpf:'934.731.650-42',
    telefone:'(00) 90000-0000'

  }

  constructor(private router: Router,
      private tecnicoService: TecnicosService
    ) { }

  ngOnInit(): void {
  }

  public backToTecList(): void{
    this.router.navigate(['tecnicos'])
  }

  public create():void {

    this.tecnicoService.createTecnico(this.tecnico).subscribe((response) => {

      this.router.navigate(['tecnicos'])
      console.log("passou")

      this.tecnicoService.message("TecnicoCadastrado")

  })


  }


}
