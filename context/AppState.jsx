import { useReducer } from "react"
import AppContext from "./AppContext"
import AppReducer from "./AppReducer"
import {
  AGREGAR_PELICULA
} from '../types';

const AppSatate = (props) => {

  const initialState = {
    miLista: []
  }

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setLista = pelicula => {
    dispatch({
      type: AGREGAR_PELICULA,
      payload: pelicula
    })
  }

  return (
    <AppContext.Provider
      value={{
        miLista: state.miLista,
        setLista
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppSatate;