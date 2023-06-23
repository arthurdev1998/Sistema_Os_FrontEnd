import { TecnicosService } from './../services/tecnicos.service';
import { Component, OnInit } from '@angular/core';
import { Tecnico } from '../models/tecnico';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.css']
})
export class TecnicoUpdateComponent implements OnInit {

  id_Tecnico = ''; // Id da UrI


  tecnico:Tecnico = {
    id:'',
    nome:'',
    cpf:'',
    telefone:''
  }

  // Validações
  nome = new FormControl('',[Validators.minLength(11)])
  cpf = new FormControl('',[Validators.minLength(11)])
  telefone = new FormControl('',[Validators.minLength(11)])

  constructor(
    private router:Router,
    private tecnicosService: TecnicosService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id_Tecnico = this.route.snapshot.paramMap.get('id')!; // método para pegar o Id da UrL
    this.findById()
  }

  public backToTecList(): void{   // método de cancelar
    this.router.navigate(['tecnicos'])
  }

  public findById():void{
    this.tecnicosService.findById(this.id_Tecnico).subscribe(resposta =>{
      this.tecnico = resposta;
      console.log(this.tecnico)
    })
  }

  public update():void{
    this.tecnicosService.updateTecnico(this.tecnico).subscribe((resposta)=>{
      this.router.navigate(['tecnicos'])
      this.tecnicosService.message('Tecnico atualizado');
    })
  }



  //TO-Do  : trocar validações
  errorValidName(){
    if(!this.nome.valid){
      return "o nome deve ter entre 11 e 100 caracteres"
    }
    else {
      return false
    }
  }
    errorValidCpf(){
      if(!this.cpf.valid){
        return "o cpf deve ter entre 11 e 100 caracteres"
      }
      else {
        return false
      }
    }
      errorValidTelefone(){
        if(!this.nome.valid){
          return "o telefone deve ter entre 11 e 100 caracteres"
        }
        else {
          return false
        }
      }


}
