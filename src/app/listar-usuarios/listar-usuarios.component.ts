import { Component, Input, OnInit } from '@angular/core';
import { UsuarioModel } from '../model/usuario.model';
import { AppState } from '../Store/app-state';
import { Store } from '@ngrx/store';
import * as fromUsuariosAction from '../Store/usuarios/usuarios.actions';
import * as fromUsuariosSelector from '../Store/usuarios/usuarios.reducers'
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuario: UsuarioModel = {
    id: 0,
    nome: '',
    idade: 0,
    perfil: ''
  }

 
  //@Input() model: any;
  
  //listaUsuarios: UsuarioModel[] = [];
  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuarios);
  usuario$: Observable<UsuarioModel | null> = this.store.select(fromUsuariosSelector.getUsuario);
  constructor(private store: Store<AppState>,
    
  ) { }

  ngOnInit(): void {
   
    this.store.dispatch(fromUsuariosAction.LoadUsuarios());
  }

  editar(id: number) {
      this.store.dispatch(fromUsuariosAction.LoadUsuario({payload:id}));
      console.log('id SELECIONADO', id);

  }

  atualizarUsuario(f: NgForm) {
    console.log(f.value)
    this.store.dispatch(fromUsuariosAction.UpdatedUsuario({payload:f.value }));
  }

  excluir(id: number) {
    this.store.dispatch(fromUsuariosAction.DeleteUsuario({payload:id}));
  }

}
