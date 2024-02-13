import { UsuariosEffects } from "./usuarios/usuarios.effects";
import { UsuariosState, usuariosReducer } from "./usuarios/usuarios.reducers";
import { ActionReducerMap } from "@ngrx/store";


export interface AppState {
    usuarios: UsuariosState;
}

export const appReducer: ActionReducerMap<AppState> = {
    usuarios: usuariosReducer
}

export const appEffects = [
    UsuariosEffects
]