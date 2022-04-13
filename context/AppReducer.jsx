import {
    AGREGAR_PELICULA
  } from '../types';

export default (state, action) => {

    switch (action.type) {

        case AGREGAR_PELICULA : 
            return {
                ...state,
                miLista: [...state.miLista, action.payload]
            }


        default:
            return state;

    }

}