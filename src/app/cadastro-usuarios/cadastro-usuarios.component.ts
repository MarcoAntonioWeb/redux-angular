import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../model/usuario.model';
import { UsuarioService } from '../repository/usuario.service';
import { AppState } from '../Store/app-state';
import { Store } from '@ngrx/store';
import * as fromUsuariosActions from '../Store/usuarios/usuarios.actions'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {
  model: UsuarioModel = {
    id: 0,
    nome: '',
    idade: 0,
    perfil: ''
  }
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  
  }

  addUsuario(f: NgForm){
    if(this.model.id == 0) {
      console.log('Cadastra', this.model);
      this.store.dispatch(fromUsuariosActions.CreateUsuario({payload:this.model}));
    } else {
      // Atualizar
      this.store.dispatch(fromUsuariosActions.UpdatedUsuario({payload:this.model}));
      console.log('Erro ao tentar cadastra', this.model);
    }

    f.resetForm()
  }
    
}
