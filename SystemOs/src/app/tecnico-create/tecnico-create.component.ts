import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TecnicosService } from '../services/tecnicos.service';
import { Tecnico } from '../models/tecnico';
import { Console } from 'console';
import { FormControl, FormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  tecnico:Tecnico = {
    id:'',
    nome:'',
    cpf:'',
    telefone:''

  }

  nome = new FormControl('',[Validators.minLength(11)])
  cpf = new FormControl('',[Validators.minLength(11)])
  telefone = new FormControl('',[Validators.minLength(11)])

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
      this.tecnicoService.message("Tecnico cadastrado com sucesso")
  },(error)=>{
      if(error.status == 400){
        this.tecnicoService.message("Tecnico já cadastrado anteriormente")
      }

  }



  )


}


  errorValidForm(){
    if(!this.nome.valid ){
      return 'o nome deve ter entre 11 e 100 caracteres'
    }
    if(!this.telefone.valid ){
      return 'o telefone deve ter entre 11 e 13 caracteres'
    }
    if(!this.cpf.valid ){
      return 'o telefone deve ter 11 digitos'
    }
    return false;
  }

}
