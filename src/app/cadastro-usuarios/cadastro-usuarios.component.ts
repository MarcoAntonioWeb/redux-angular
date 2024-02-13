import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../model/usuario.model';
import { UsuarioService } from '../repository/usuario.service';

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
  constructor(private usuarioServico: UsuarioService) { }

  ngOnInit(): void {
  }

  addUsuario(){
    if(this.model.id == 0) {
      this.usuarioServico.addUsuario(this.model).subscribe()
    } else {
      // Atualizar
    }
  }

}
