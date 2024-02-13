import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../repository/usuario.service';
import { UsuarioModel } from '../model/usuario.model';
import { AppState } from '../Store/app-state';
import { Store } from '@ngrx/store';
import * as fromUsuariosAction from '../Store/usuarios/usuarios.actions';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  listaUsuarios: UsuarioModel[] = [];
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
   
    this.store.dispatch(fromUsuariosAction.LoadUsuarios())
  }

}
