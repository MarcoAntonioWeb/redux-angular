import { state } from "@angular/animations";
import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UsuarioModel } from "../../model/usuario.model";
import * as formUsuariosAction from '../usuarios/usuarios.actions'
import { filter, map } from "rxjs";

export interface UsuariosState {
    usuarios: UsuarioModel[];
    usuario: UsuarioModel | null,
    error: string | '',
}

export const initialState: UsuariosState = {
    usuarios: [],
    usuario: null,
    error: ''
}


const _usuariosReducer = createReducer(
    initialState,
    on( formUsuariosAction.LoadUsuariosSuccess, ( state, { payload }) => ({ 
        ...state, 
        usuarios: payload, error: '' 
    })),
    on( formUsuariosAction.LoadUsuariosFail,( state, { error }) => ({ 
        ...state, 
        error: error 
    })),
    
    on( formUsuariosAction.LoadUsuarioSuccess, ( state, { payload }) => ({ 
        ...state, 
        usuario: payload, error: '' 
    })),

    on( formUsuariosAction.LoadUsuarioFail,( state, { error }) => ({ 
        ...state, 
        error: error 
    })),
        
    on( formUsuariosAction.CreateUsuarioSuccess, ( state, { payload }) => ({ 
        ...state, 
        usuarios: [ ...state.usuarios, payload ], 
        error: '' 
    })),
    on( formUsuariosAction.CreateUsuarioFail, ( state, { error }) => (
        { ...state, error: error })), 
            
    on( formUsuariosAction.UpdateUsuarioSuccess, ( state, { payload }) =>({ 
        ...state, 
        usuarios: [ ...state.usuarios ].map(( row ) => {
            if( row.id == payload.id ) {
                return payload
            } else {
                return row
            }
        }), 
        error: '' 
    })),

    on( formUsuariosAction.CreateUsuarioFail, ( state, { error }) => ({ 
        ...state, 
        error: error 
    })),
        
    on( formUsuariosAction.DeleteUsuarioSuccess, ( state, { payload }) => ({ 
        ...state, 
        usuarios: [ ...state.usuarios]
        .filter((filter) => filter.id != payload), 
        error: '' 
    })),
    on( formUsuariosAction.CreateUsuarioFail, ( state, { error }) => ({ 
        ...state, 
        error: error 
    })),    
);

export function usuariosReducer(state = initialState, action: Action ) {
    return _usuariosReducer(state, action)
};

const getUsuarioFeatureState = createFeatureSelector<UsuariosState>(
    'usuarios'
);

export const getUsuarios = createSelector(
    getUsuarioFeatureState,
    (state: UsuariosState) => state.usuarios
);

export const getUsuario = createSelector(
    getUsuarioFeatureState,
    (state: UsuariosState) => state.usuario
);

export const getUsuarioErro = createSelector(
    getUsuarioFeatureState,
    (state: UsuariosState) => state.error
);